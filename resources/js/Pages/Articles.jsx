import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PrimeReactProvider } from "primereact/api";
import { Head } from "@inertiajs/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import axios from "axios";

const Articles = ({ auth }) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios
            .get("/get-articles")
            .then((res) => {
                setArticles(res?.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.table(articles);
    //     const users = [
    //         {
    //             name: "Saad",
    //             age: 30,
    //             email: "saad@mage4.com",
    //         },
    //         {
    //             name: "Daniyal",
    //             age: 26,
    //             email: "daniyal@mage4.com",
    //         },
    //         {
    //             name: "Abdul Basit",
    //             age: 24,
    //             email: "abdul.basit@mage4.com",
    //         },
    //     ];
    //     console.log(users);
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
                                    <PrimeReactProvider>
                                        <DataTable
                                            stripedRows
                                            paginator
                                            rows={10}
                                            value={articles}
                                            tableStyle={{ minWidth: "50rem" }}
                                        >
                                            <Column
                                                field="id"
                                                header="ID"
                                            ></Column>
                                            <Column
                                                field="authID"
                                                header="AuthID"
                                            ></Column>
                                            <Column
                                                field="title"
                                                header="Title"
                                            ></Column>
                                            <Column
                                                field="banner"
                                                header="Banner"
                                            ></Column>
                                            <Column
                                                field="description"
                                                header="Description"
                                            ></Column>
                                            <Column
                                                field="status"
                                                header="Status"
                                            ></Column>
                                            <Column
                                                field="created_at"
                                                header="Created_at"
                                            ></Column>
                                            <Column
                                                field="updated_at"
                                                header="Updated_at"
                                            ></Column>
                                        </DataTable>
                                    </PrimeReactProvider>
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
