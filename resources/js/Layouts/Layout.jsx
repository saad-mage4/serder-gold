import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TabsSection from "@/Components/TabSection";

const Layout = ({ children, user }) => {
    return (
        <>
            <Navbar userID={user?.id} userName={user?.name} />
            <TabsSection/>
            {children}
            <Footer/>
        </>
    );
};
export default Layout;
