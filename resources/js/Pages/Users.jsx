import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import NavLink from "@/Components/NavLink";
import { useApiMutation, useApiQuery } from "@/hooks/useApi";

const Users = ({ auth }) => {
    const { data: users } = useApiQuery('get-users', "/get-users");
    const [products, setProducts] = useState([]);
    const [user_status] = useState(["admin", "user"]);
    useEffect(() => {
        if (users) {
            setProducts(users);
        }
    }, [users]);

    const AvatarTemplate = (avatar) => {
        return (
            <div className="flex gap-2 align-items-center">
                <img
                    className="object-cover w-8 h-8 rounded-full"
                    alt={avatar.name}
                    src={`${avatar.avatar}`}
                />
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

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={user_status}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
            />
        );
    };

    const postMutation = useApiMutation('post', '/update-users', {
        invalidateKey: ['update-users'],
        onSuccess: (data) => alert(data),
    });
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
            // const response = await axios.post("/update-users", formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // });
            await postMutation.mutateAsync(formData)
        } catch (error) {
            console.log(error.message);
        }
    };

    const allowEdit = (rowData) => {
        return rowData.name !== "Blue Band";
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Users
                    </h2>
                }
            >
                <Head title="Users Page | " />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <section className="users-section">
                                    <header className="relative">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            List Users
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-600">
                                            list of all users.
                                        </p>
                                        <NavLink
                                            href={route("add-users")}
                                            className="absolute top-2/4 -translate-y-2/4 right-0 bg-blue-700 text-white px-4 py-1 rounded hover:text-white shadow-none border-2 border-[#f0b90a] focus:text-white"
                                        >
                                            Add Users
                                        </NavLink>
                                    </header>
                                    <PrimeReactProvider>
                                        <DataTable
                                            editMode="row"
                                            stripedRows
                                            paginator
                                            rows={5}
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
                                                field="name"
                                                header="Name"
                                                editor={(options) =>
                                                    textEditor(options)
                                                }
                                            ></Column>
                                            <Column
                                                field="email"
                                                header="Email"
                                                editor={(options) =>
                                                    textEditor(options)
                                                }
                                            ></Column>
                                            <Column
                                                field="user_role"
                                                header="User Role"
                                                editor={(options) =>
                                                    statusEditor(options)
                                                }
                                            ></Column>
                                            <Column
                                                field="avatar"
                                                header="Avatar"
                                                body={AvatarTemplate}
                                                editor={(options) =>
                                                    imgEditor(options)
                                                }
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

export default Users;
