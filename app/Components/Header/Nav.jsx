"use client"; 
import React, { useState ,useEffect} from "react";
import dynamic from "next/dynamic";
import DropdownMenu from './DropdownMenu';
import { TiLockClosedMini, TiShoppingCartMini } from "../../lib/@react-icons";
import NavItem from "./NavItem";
import Link from "next/link";
const Button = dynamic(() => import('../Button/Button'));
const ButtonOutline = dynamic(() => import('../Button/ButtonOutline'));
const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const id = sessionStorage.getItem('id'); 
    if (id) {
      setIsLoggedIn(true); 
    }
  }, []);

  const memoItems = {
    "stages": {
      "1": [ "المرحلة التأسيسية","المرحلة الابتدائية","المرحلة المتوسطة", "المرحلة الثانوية"],
      "2":[ "المرحلة التأسيسية","المرحلة الابتدائية","المرحلة المتوسطة", "المرحلة الثانوية"],
    }
  };
  
  return (
    <div className="hidden h-[100px] w-fit min-[1200px]:flex">
      <ul className="text-[--background] flex space-x-4 md:space-x-6 items-center text-[16px] md:text-[18px] leading-5 md:leading-6 font-normal">
        <NavItem AddclassName="ml-4" link="/">الرئيسية</NavItem>
        <li className="text-[--background] hover:text-[--foreground] text-center border-b-2 md:border-b-0">
        <DropdownMenu
          nameDropdown="الطالب"
          items={memoItems.stages["1"].map((level) => ({
            namechildern: level,
            link: `1/${level}`
          }))}
        />
      </li>
      <li className="text-[--background] hover:text-[--foreground] text-center">
        <DropdownMenu
          nameDropdown="المذكرات"
          items={memoItems.stages["2"].map((level) => ({
            namechildern: level,
            link: `2/${level}`
          }))}
        />
      </li>
        <NavItem link="/Packages">الباقات</NavItem>
        <NavItem link="/">الحصص المباشرة</NavItem>
        <NavItem link="/AllCourses">الدورات</NavItem>
        <NavItem link="/Capabilities">القدرات</NavItem>
        <li className="text-[--background] hover:text-[--foreground] text-center">
          <div className="bg-[#f3f3f3ec] rounded-full p-2 cursor-pointer">
            <TiShoppingCartMini size={28} className="text-[--foreground]" />
          </div>
        </li>
        {isLoggedIn ? (
          <li className="text-center">
              <Link href='/MyAccount'>حسابي</Link>
          </li>
        ) : (
          <>
            <li className="text-[--background] hover:text-[--foreground] text-center">
              <Button
                textinner="الدخول"
                icon={<TiLockClosedMini />}
                nameLink="/login"
                ClassNameAdd="transition-all delay-100 bg-[--foreground] px-2 py-2 md:px-4 md:py-2 text-[14px] md:text-[17px]"
              />
            </li>
            <li className="text-center">
              <ButtonOutline
                textinner="حساب جديد"
                nameLink="/register"
                ClassNameAdd="transition-all p-2 hover:text-white delay-100 text-[14px] md:text-[17px]"
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
