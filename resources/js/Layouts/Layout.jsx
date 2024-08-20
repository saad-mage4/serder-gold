import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TabsSection from "@/Components/TabSection";
import { ThemeProvider } from "@/context/ThemeContext";

const Layout = ({ children, user }) => {
    return (
        <>
            <ThemeProvider>
            <Navbar userID={user?.id} userName={user?.name} />
            <TabsSection/>
            {children}
            <Footer/>
            </ThemeProvider>

        </>
    );
};
export default Layout;
