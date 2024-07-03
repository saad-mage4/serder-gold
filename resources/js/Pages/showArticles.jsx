import Layout from "@/Layouts/Layout";

const showArticles = ({ auth }) => {
    return <Layout user={auth.user}>hey</Layout>;
};

export default showArticles;
