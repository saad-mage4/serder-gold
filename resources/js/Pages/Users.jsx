import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
const Users = ({ auth }) => {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Users
                    </h2>
                }
            ></AuthenticatedLayout>
        </>
    );
};

export default Users;
