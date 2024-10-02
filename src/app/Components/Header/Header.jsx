"use client"; // Add this to mark the component as a Client Component
import Image from "next/image";
// font-[family-name:var(--font-Cairo-Medium)]
import Logo from "@/app/images/logo.png";
// import { FiMenuMini, MdOutlineCloseMini } from "@/app/lib/@react-icons";
import React, { useState, useEffect,useCallback } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Button from "../Button";
import { TiShoppingCartMini } from "@/app/lib/@react-icons";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down: hide the navbar
        setShow(false);
      } else {
        // Scrolling up: show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]); // Stabilize controlNavbar with useCallback, and update when lastScrollY changes

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      
      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]); // Include controlNavbar in the dependency array

  return (
    <div
      className={`  font-[family-name:var(--font-Cairo-Medium)] scroll-smooth fixed z-10`}
    >
      <header
        className={`active ${show ? "block" : "hidden"}
         lg:px-0 w-full fixed top-0 left-0 z-[10000] 
      transition-all duration-300 bg-white `}
      >

        <div className="flex lg:flex   items-center px-12 justify-between   md:px-24  ">
          {/* logo  */}
          <Image src={Logo}   
             width="140"
             height="100"
             className=" md:h-[100px] max-sm:h-[55px] max-sm:w-[80px]"
             alt="logo"
               />
          {/* nav */}
          <Nav />
          {/* nav-mobile */}
          <NavMobile />
     
          <div className="min-[1020px]:flex justify-center items-center gap-6 hidden ">
            <div className="bg-[#f3f3f3ec] rounded-full p-2"><TiShoppingCartMini size={28}  className="text-[--foreground] cursor-pointer"/></div>
          <Button textinner=" تسجيل الدخول" nameLink='/login' ClassNameAdd=' transition-all delay-100 bg-[--foreground] px-6 py-4 text-[17px] ' />
          </div>

       
        </div>

      </header>
    </div>
  );
};

export default Header;
