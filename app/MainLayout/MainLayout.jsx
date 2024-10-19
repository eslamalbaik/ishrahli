import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const MainLayout = ({ children, showHeader = true, showFooter = true }) => {
    return (
        <>
            {showHeader && <Header />}
            {children}
            {showFooter && <Footer />}
        </>
    );
};

export default MainLayout;
