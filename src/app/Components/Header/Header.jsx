import React from "react";
import dynamic from "next/dynamic";
const Logo = dynamic(() => import('../Logo'));
const Nav = dynamic(() => import('./Nav'));
const NavMobile = dynamic(() => import('./NavMobile'));
const Header = () => {
  return (
    <header className="w-full bg-white active scroll-smooth fixed left-0 top-0 z-[10000] mb-24 ">
      <nav className="flex justify-between lg:justify-evenly items-center sm:px-4 xl:px-26 ">
      <Logo />
      <Nav />
      <NavMobile />
      </nav>
    </header>
  );
};

export default Header;
