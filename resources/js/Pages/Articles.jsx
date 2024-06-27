import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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
            ></AuthenticatedLayout>
        </>
    );
};

export default Articles;
