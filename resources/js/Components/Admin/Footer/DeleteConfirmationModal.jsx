import React from "react";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

const DeleteConfirmationModal = ({ visible, setVisible, handleDelete }) => {
    return (
        <div className="p-6">
            <p className="m-0">
                Are you sure you want to delete this item? This action cannot be
                undone.
            </p>
            <div className="mt-6 flex justify-end">
                <SecondaryButton onClick={() => setVisible(false)}>
                    No
                </SecondaryButton>
                <DangerButton onClick={handleDelete} className="ms-3">
                    Yes
                </DangerButton>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
