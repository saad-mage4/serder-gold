import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const Layout = ({ children, user }) => {
    return (
        <>
            <Navbar userID={user?.id} />
            {children}
            <Footer/>
        </>
    );
};
export default Layout;
