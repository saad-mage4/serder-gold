// import React, { useState, useEffect, useCallback } from "react";
// import AdminLayout from "@/Layouts/admin/AdminLayout";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import PrimaryButton from "@/Components/PrimaryButton";
// import Modal from "@/Components/Modal";
// import InputLabel from "@/Components/InputLabel";
// import TextInput from "@/Components/TextInput";
// import { useForm } from "@inertiajs/react";
// import InputError from "@/Components/InputError";
// import SecondaryButton from "@/Components/SecondaryButton";
// import { Button } from "primereact/button";
// import { Dialog } from "primereact/dialog";
// import DangerButton from "@/Components/DangerButton";

// const FooterSocialLink = ({ auth, footersociallink }) => {
//     //  const { data } = useApiQuery("get-articles-admin", "/get-articles-admin");
//     const [products, setProducts] = useState([]);
//     const [article_status] = useState(["active", "deactivate"]);

//     useEffect(() => {
//         if (footersociallink) {
//             setProducts(footersociallink);
//         }
//     }, [footersociallink]);

//     const [modal, setModal] = useState(false);
//     const [visible, setVisible] = useState(false);
//     const [deleteId, setDeleteId] = useState(null);

//     const handleVisibility = (id) => {
//         setVisible(true);
//         setDeleteId(id);
//         deleteSocialLink(id);
//     };
//     const handleDelete = () => {
//         if (deleteId !== null) {
//             deleteSocialLink(deleteId);
//         }
//         setVisible(false); // Close the dialog
//     };

//     const footerContent = (
//         <div className="mt-6 flex justify-end">
//             <SecondaryButton onClick={() => setVisible(false)}>
//                 No
//             </SecondaryButton>

//             <DangerButton onClick={handleDelete} className="ms-3">
//                 Yes
//             </DangerButton>
//         </div>
//     );
//     const OpenModal = useCallback(() => setModal(!modal), [modal]);
//     const OpenVisibility = useCallback(() => setVisible(!visible), [visible]);

//     const {
//         data,
//         post,
//         put,
//         setData,
//         delete: destroy,
//         processing,
//         // reset,
//         errors,
//     } = useForm({
//         icon: null,
//         link: "",
//     });

//     console.log(products);

//     const handleImageChange = (e) => {
//         setData("icon", e.target.files[0]);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post(route("social-link.store"), {
//             preserveScroll: true,
//             onSuccess: () => setModal(false),
//         });
//     };

//     const BannerTemplate = (banner) => {
//         return (
//             <div className="flex gap-2 align-items-center">
//                 <img alt={banner.name} src={`${banner.banner}`} width={32} />
//             </div>
//         );
//     };

//     const textEditor = (options) => {
//         return (
//             <InputText
//                 type="text"
//                 value={options.value}
//                 onChange={(e) => options.editorCallback(e.target.value)}
//             />
//         );
//     };

//     const imgEditor = (options) => {
//         return (
//             <input
//                 type="file"
//                 onChange={(e) => options.editorCallback(e.target.files[0])}
//             />
//         );
//     };

//     const statusEditor = (options) => {
//         return (
//             <Dropdown
//                 value={options.value}
//                 options={article_status}
//                 onChange={(e) => options.editorCallback(e.value)}
//                 placeholder="Select a Status"
//             />
//         );
//     };

//     const onRowEditComplete = async (e) => {
//         let _products = [...products];
//         let { newData, index } = e;

//         _products[index] = newData;

//         setProducts(_products);

//         const formData = new FormData();
//         for (let key in newData) {
//             formData.append(key, newData[key]);
//         }

//         console.log(newData);

//         try {
//             await put(route("social-link.update", newData?.id), newData, {
//                 preserveScroll: true,
//                 onSuccess: () => {
//                     console.log("Row updated successfully");
//                 },
//                 onError: (errors) => {
//                     console.error("Error updating row:", errors);
//                 },
//             });
//         } catch (error) {
//             console.log(error?.message);
//         }
//     };

//     const deleteSocialLink = (id) => {
//         try {
//             destroy(route("social-link.destroy", id), {
//                 preserveScroll: true,
//                 onSuccess: () => {
//                     console.log("Social link deleted successfully");
//                 },
//                 onError: (errors) => {
//                     console.error("Error deleting social link:", errors);
//                 },
//             });
//         } catch (error) {
//             console.log(error?.message);
//         }
//     };
//     const actionTemplate = () => {
//         return (
//             <div className="flex flex-wrap gap-2">
//                 <Button type="button" icon="pi pi-search" rounded></Button>
//                 <Button
//                     type="button"
//                     icon="pi pi-pencil"
//                     severity="success"
//                     rounded
//                 ></Button>
//             </div>
//         );
//     };

//     const allowEdit = (rowData) => {
//         return rowData.name !== "Blue Band";
//     };

//     return (
//         <AdminLayout auth={auth} header="Social Link" title="Social Link |">
//             <Modal show={modal} onClose={OpenModal}>
//                 <form onSubmit={handleSubmit} className="p-6">
//                     <h2 className="text-lg font-medium text-gray-900">
//                         Create Social Link
//                     </h2>
//                     <div className="mt-6">
//                         <InputLabel htmlFor="icon" value="Icon" />
//                         <TextInput
//                             id="icon"
//                             type="file"
//                             name="icon"
//                             //  value={data?.icon}
//                             onChange={handleImageChange}
//                             //  className="mt-1 block w-full cursor-pointer border-none shadow-none"
//                             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
//                             isFocused
//                             placeholder=""
//                         />
//                         {errors.icon && (
//                             <div className="text-red-600 mt-2">
//                                 {errors.icon}
//                             </div>
//                         )}
//                         {/* <InputError message={errors?.icon} className="mt-2" /> */}
//                     </div>

//                     <div className="mt-6">
//                         <InputLabel htmlFor="link" value="Link" />

//                         <TextInput
//                             id="link"
//                             type="text"
//                             name="link"
//                             // value={data?.link}
//                             onChange={(e) => setData("link", e.target.value)}
//                             className="mt-1 block w-full cursor-pointer"
//                             isFocused
//                             placeholder=""
//                         />

//                         {errors.link && (
//                             <div className="text-red-600 mt-2">
//                                 {errors.link}
//                             </div>
//                         )}
//                         {/* <InputError message={errors?.link} className="mt-2" /> */}
//                     </div>

//                     <div className="mt-6 flex justify-end">
//                         <SecondaryButton onClick={OpenModal}>
//                             Cancel
//                         </SecondaryButton>

//                         <PrimaryButton className="ms-3" disabled={processing}>
//                             {processing ? "Save..." : "Save"}
//                         </PrimaryButton>
//                     </div>
//                 </form>
//             </Modal>
//             <Modal show={visible} onClose={OpenVisibility}>
//                 <div className="p-6">
//                     <p className="m-0">
//                         Are you sure you want to delete this item? This action
//                         cannot be undone.
//                     </p>
//                     <div className="mt-6 flex justify-end">
//                         <SecondaryButton onClick={() => setVisible(false)}>
//                             No
//                         </SecondaryButton>

//                         <DangerButton onClick={handleDelete} className="ms-3">
//                             Yes
//                         </DangerButton>
//                     </div>
//                 </div>
//             </Modal>

//             {/* <Dialog
//                 header="Confirm Deletion"
//                 visible={visible}
//                 style={{ width: "50vw" }}
//                 onHide={() => setVisible(false)} // Close the dialog
//                 footer={footerContent}
//             >
//                 <p className="m-0">
//                     Are you sure you want to delete this item? This action
//                     cannot be undone.
//                 </p>
//             </Dialog> */}

//             <header className="relative">
//                 <h2 className="text-lg font-medium text-gray-900">
//                     List Social Link
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-600">
//                     list of all Social Link.
//                 </p>
//                 <PrimaryButton
//                     onClick={OpenModal}
//                     className="absolute top-2/4 -translate-y-2/4 right-0 bg-blue-700 text-white px-4 py-1 rounded hover:text-white shadow-none border-2 border-[#f0b90a] focus:text-white"
//                 >
//                     Add New
//                 </PrimaryButton>
//             </header>
//             {/* <PrimeReactProvider> */}
//             <DataTable
//                 lazy
//                 editMode="row"
//                 stripedRows
//                 paginator
//                 rows={4}
//                 scrollable
//                 scrollHeight="450px"
//                 value={products}
//                 tableStyle={{ minWidth: "50rem" }}
//                 onRowEditComplete={onRowEditComplete}
//             >
//                 <Column field="id" header="ID"></Column>
//                 <Column
//                     field="link"
//                     header="Link"
//                     editor={(options) => textEditor(options)}
//                 ></Column>
//                 <Column
//                     field="icon"
//                     header="Icon"
//                     body={BannerTemplate}
//                     editor={(options) => imgEditor(options)}
//                 ></Column>
//                 <Column
//                     header="Action"
//                     body={(rowData) => (
//                         <div>
//                             <Button rowEditor={allowEdit(rowData)}>edit</Button>
//                             <br />
//                             <Button
//                                 onClick={() => handleVisibility(rowData?.id)}
//                             >
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                     // rowEditor={allowEdit}
//                 ></Column>
//                 {/* <Column
//                     header="Action"
//                     body={actionTemplate}
//                     headerClassName="w-10rem"
//                 /> */}
//                 {/* <Column
//                     header="Action"
//                     body={(rowData) => (
//                         <div>
//                             <Button
//                                 onClick={() => deleteSocialLink(rowData?.id)}
//                             >
//                                 Delete
//                             </Button>
//                         </div>
//                     )}
//                 ></Column> */}
//             </DataTable>
//             {/* </PrimeReactProvider> */}
//         </AdminLayout>
//     );
// };

// export default FooterSocialLink;

import React, { useState, useEffect, useCallback } from "react";
import AdminLayout from "@/Layouts/admin/AdminLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import SocialLinkForm from "@/Components/Admin/Footer/SocialLinkForm";
import DeleteConfirmationModal from "@/Components/Admin/Footer/DeleteConfirmationModal";
import SocialLinkTable from "@/Components/Admin/Footer/SocialLinkTable";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useApiMutation } from "@/hooks/useApi";

const FooterSocialLink = ({ auth, footersociallink }) => {
    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        if (footersociallink) {
            setProducts(footersociallink);
        }
    }, [footersociallink]);

    const { put, delete: destroy, post } = useForm();

    const handleVisibility = (id) => {
        setDeleteId(id);
        setVisible(true);
        deleteSocialLink(id);
    };

    const handleDelete = () => {
        if (deleteId !== null) {
            deleteSocialLink(deleteId);
        }
        setVisible(false);
    };

    const deleteSocialLink = (id) => {
        destroy(route("social-link.destroy", id), {
            // preserveScroll: true,
            onSuccess: () => {
                console.log("Social link deleted successfully");
            },
            onError: (errors) => {
                console.error("Error deleting social link:", errors);
            },
        });
    };

    // const postMutation = useApiMutation(
    //     "post",
    //     (id) => `/social-link-update/${id}`,
    //     {
    //         invalidateKey: ["social-link-update"],
    //         onSuccess: (data) => {
    //             alert(`Update Successful: ${data}`);
    //         },
    //     }
    // );

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
            // await post(route("social-link-update", newData?.id), formData, {
            //     preserveScroll: true,
            //     onSuccess: () => {
            //         console.log("Row updated successfully");
            //     },
            //     onError: (errors) => {
            //         console.error("Error updating row:", errors);
            //     },
            // });
            const response = await axios
                .post(`social-link-update/${newData?.id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    console.log(res?.data);
                });
            // const formData = { ...newData, id: newData?.id };

            // await postMutation.mutateAsync(formData);
        } catch (error) {
            console.log(error?.message);
        }
    };

    return (
        <AdminLayout auth={auth} header="Social Link" title="Social Link |">
            <Modal show={modal} onClose={() => setModal(false)}>
                <SocialLinkForm modal={modal} setModal={setModal} />
            </Modal>

            <Modal show={visible} onClose={() => setVisible(false)}>
                <DeleteConfirmationModal
                    visible={visible}
                    setVisible={setVisible}
                    handleDelete={handleDelete}
                />
            </Modal>

            <header className="relative">
                <h2 className="text-lg font-medium text-gray-900">
                    List Social Link
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    List of all Social Links.
                </p>
                <PrimaryButton
                    onClick={() => setModal(true)}
                    className="absolute top-2/4 right-0 -translate-y-2/4"
                >
                    Create Social Link
                </PrimaryButton>
            </header>

            <section className="mt-6 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black ring-opacity-5">
                <div className="min-w-full divide-y divide-gray-300">
                    <div className="overflow-x-auto">
                        <SocialLinkTable
                            products={products}
                            setProducts={setProducts}
                            onRowEditComplete={onRowEditComplete}
                            handleVisibility={handleVisibility}
                        />
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default FooterSocialLink;
