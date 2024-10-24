import React from "react";
import  Logo from '../Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'
const Header = () => {
  return (
    <header className="w-full bg-white  shadow-sm shadow-[#f3f3f3ec]   fixed left-0 top-0 z-[10000] mb-24 ">
      <nav className="flex justify-evenly lg:justify-evenly items-center sm:px-4 xl:px-26 ">
      <Logo />
      <Nav />
      <NavMobile />
      </nav>
    </header>
  );
};

export default Header;
