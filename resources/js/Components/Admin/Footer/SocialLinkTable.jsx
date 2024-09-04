import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

const SocialLinkTable = ({
    products,
    setProducts,
    onRowEditComplete,
    handleVisibility,
}) => {
    const article_status = ["active", "deactivate"];

    const BannerTemplate = (banner) => {
        return (
            <div className="flex gap-2 align-items-center">
                <img alt={banner.name} src={`${banner.banner}`} width={32} />
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
            <input
                type="file"
                onChange={(e) => options.editorCallback(e.target.files[0])}
            />
        );
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={article_status}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
            />
        );
    };

    const allowEdit = (rowData) => {
        return rowData.name !== "Blue Band";
    };

    return (
        <DataTable
            lazy
            editMode="row"
            stripedRows
            paginator
            rows={4}
            scrollable
            scrollHeight="450px"
            value={products}
            tableStyle={{ minWidth: "50rem" }}
            onRowEditComplete={onRowEditComplete}
        >
            <Column field="id" header="ID"></Column>
            <Column
                field="link"
                header="Link"
                editor={(options) => textEditor(options)}
            ></Column>
            <Column
                field="icon"
                header="Icon"
                body={BannerTemplate}
                editor={(options) => imgEditor(options)}
            ></Column>
            <Column
                header="Edit"
                //  body={(rowData) => (
                //      <div>
                //          {/* <Chip label="edit" removable /> */}
                //          <Button rowEditor={allowEdit(rowData)}>edit</Button>
                //          <br />
                //          <Button onClick={() => handleVisibility(rowData?.id)}>
                //              Delete
                //          </Button>
                //      </div>
                //  )}
                rowEditor={allowEdit}
                headerStyle={{ width: "10%", minWidth: "8rem" }}
                bodyStyle={{ textAlign: "center" }}
            ></Column>
            <Column
                header="Delete"
                body={(rowData) => (
                    <Button onClick={() => handleVisibility(rowData?.id)}>
                        <i
                            className="pi-trash"
                            style={{ fontSize: "2.5rem" }}
                        ></i>
                        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
                        Delete
                    </Button>
                )}
            ></Column>
        </DataTable>
    );
};

export default SocialLinkTable;
