import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};
export default Layout;
