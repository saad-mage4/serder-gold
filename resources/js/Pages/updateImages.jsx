import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";

export default function updateImages({ auth }) {
    const user = usePage().props.auth.user;
    // console.log(user);

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            siteTitle: null,
            logo_header: null,
            logo_footer: null,
            centerBanner: null,
            LeftBanner: null,
            rightBanner: null,
            bottomBanner: null,
        });

    const submit = (e) => {
        e.preventDefault();
        // post("/save-images");
        post(route("save-images"), {
            preserveScroll: true,
            onSuccess: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Images
                </h2>
            }
        >
            <Head title="Update - Images" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <section className="update-images">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Images Update
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-600">
                                        Update your home page information.
                                    </p>
                                </header>

                                <form
                                    onSubmit={submit}
                                    className="mt-6 grid grid-cols-2 gap-5"
                                >
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="logo"
                                            value="Logo Header"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="logo"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "logo_header",
                                                    e.target.files[0]
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.logo_header}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="logoFooter"
                                            value="Logo Footer"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="logoFooter"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "logo_footer",
                                                    e.target.files[0]
                                                )
                                            }
                                            // required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.logo_footer}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="centerAd"
                                            value="Center Ad"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="centerAd"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "centerBanner",
                                                    e.target.files[0]
                                                )
                                            }
                                            // required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.centerBanner}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="leftAd"
                                            value="Left Ad"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="leftAd"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "leftBanner",
                                                    e.target.files[0]
                                                )
                                            }
                                            // required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.leftBanner}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="rightAd"
                                            value="Right Ad"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="rightAd"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "rightBanner",
                                                    e.target.files[0]
                                                )
                                            }
                                            // required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.rightBanner}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <InputLabel
                                            htmlFor="bottomAd"
                                            value="Bottom Ad"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        />
                                        <TextInput
                                            id="bottomAd"
                                            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "bottomBanner",
                                                    e.target.files[0]
                                                )
                                            }
                                            // required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.bottomAd}
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
