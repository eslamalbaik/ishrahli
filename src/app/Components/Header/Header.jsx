"use client";
import Image from "next/image";
import React, { Suspense, lazy } from 'react';
const Nav = lazy(() => import('../Header/Nav'));
const NavMobile = lazy(() => import('../Header/NavMobile'));

import Button from "../Button/Button";
import { TiShoppingCartMini } from "@/app/lib/@react-icons";
import Logo from "../Logo";

const Header = () => {
  return (
      <header className="w-full active scroll-smooth fixed left-0 top bg-white  z-[10000] flex lg:flex items-center mb-24 px-12 justify-between md:px-24 ">
       
          {/* logo  */}
            <Logo/>

          {/* nav */}
          <Nav />
          
          {/* nav-mobile */}
          <NavMobile />

          {/* Buttons Gruop [Login and Cart ] */}
          <div className="min-[1020px]:flex justify-center items-center gap-6 hidden ">
            <div className="bg-[#f3f3f3ec] rounded-full p-2">
              <TiShoppingCartMini
                size={28}
                className="text-[--foreground] cursor-pointer"
              />
            </div>
            <Button
              textinner=" تسجيل الدخول"
              nameLink="/login"
              ClassNameAdd=" transition-all delay-100 bg-[--foreground] px-6 py-4 text-[17px] "
            />
          </div>
      </header>
  );
};

export default Header;
