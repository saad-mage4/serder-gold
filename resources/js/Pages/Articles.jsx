import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PrimeReactProvider } from "primereact/api";
import { Head } from "@inertiajs/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import axios from "axios";
import { InputText } from "primereact/inputtext";

const Articles = ({ auth }) => {
    // const [articles, setArticles] = useState([]);
    // // post kam
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("/get-articles")
            .then((res) => {
                setProducts(res?.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const representativeBodyTemplate = (product) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={product.name} src={`${product.banner}`} width={32} />
                <span>{product.name}</span>
            </div>
        );
    };

    const textEditor = (options) => {
        return (
            <InputText
                type="text"
                value={options.value}
                onChange={(e) => options.editorCallback(e.target.value)}
            />
        );
    };

    const imgEditor = (options) => {
        return (
            <InputText
                type="file"
                onChange={(e) => options.editorCallback(e.target.files[0])}
            />
        );
    };

    const onRowEditComplete = async (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);

        const formData = new FormData();
        for (let key in newData) {
            formData.append(key, newData[key]);
        }

        try {
            const response = await axios.post("/update-articles", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response?.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    console.table(products);

    const allowEdit = (rowData) => {
        return rowData.name !== "Blue Band";
    };

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
                                            editMode="row"
                                            lazy
                                            stripedRows
                                            paginator
                                            rows={10}
                                            scrollable
                                            scrollHeight="450px"
                                            value={products}
                                            tableStyle={{ minWidth: "50rem" }}
                                            onRowEditComplete={
                                                onRowEditComplete
                                            }
                                        >
                                            <Column
                                                field="id"
                                                header="ID"
                                            ></Column>
                                            <Column
                                                field="title"
                                                header="Title"
                                                editor={(options) =>
                                                    textEditor(options)
                                                }
                                            ></Column>
                                            <Column
                                                field="banner"
                                                header="Banner"
                                                body={
                                                    representativeBodyTemplate
                                                }
                                                editor={(options) =>
                                                    imgEditor(options)
                                                }
                                            ></Column>
                                            <Column
                                                field="description"
                                                header="Description"
                                                editor={(options) =>
                                                    textEditor(options)
                                                }
                                            ></Column>
                                            <Column
                                                field="status"
                                                header="Status"
                                            ></Column>
                                            <Column
                                                header="Action"
                                                rowEditor={allowEdit}
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
