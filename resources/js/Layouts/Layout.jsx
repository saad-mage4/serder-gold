import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TabsSection from "@/Components/TabSection";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeTabProvider } from "@/context/ThemeTabContext";

const Layout = ({ children, user }) => {
    return (
        <>
            <ThemeProvider>
                <ThemeTabProvider>
            <Navbar userID={user?.id} userName={user?.name} />
            <TabsSection/>
            {children}
            <Footer/>
                </ThemeTabProvider>
            </ThemeProvider>

        </>
    );
};
export default Layout;
