import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
const Articles = ({ auth }) => {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Articles
                    </h2>
                }
            >
                <Head title="Articles Page | " />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <section className="articles-section">
                                    <header>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            List Articles
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-600">
                                            list of all articles.
                                        </p>
                                    </header>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Articles;
