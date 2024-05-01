import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";

export default function updateBanners({ auth }) {
    const user = usePage().props.auth.user;
    // console.log(user);

    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        logo: null,
        centerBanner: null,
    });

    const submit = (e) => {
        e.preventDefault();
        // post("/save-images");
        post(route("save-images"), {
            preserveScroll: true,
            onSuccess: () => {
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Banners
                </h2>
            }
        >
            <Head title="Update - Banners" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="update-banners">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Profile Information
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Update your account's profile
                                        information and email address.
                                    </p>
                                </header>

                                <form
                                    onSubmit={submit}
                                    className="mt-6 grid grid-cols-2 gap-5"
                                >
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="logo"
                                            value="Logo Image"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="logo"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "logo",
                                                    e.target.files[0]
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.logo}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="centerBanner"
                                            value="Center Banner Image"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="centerBanner"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "centerBanner",
                                                    e.target.files[0]
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.centerBanner}
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            Save
                                        </PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Saved.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
