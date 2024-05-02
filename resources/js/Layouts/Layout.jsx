import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const Layout = ({ children, user }) => {
    return (
        <>
            <Navbar userID={user?.id} userName={user?.name} />
            {children}
            <Footer/>
        </>
    );
};
export default Layout;
