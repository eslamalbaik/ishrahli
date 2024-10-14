import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../Components/Footer/Footer"),{ ssr: false });
const Header = dynamic(() => import("../Components/Header/Header"),{ ssr: false });

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
