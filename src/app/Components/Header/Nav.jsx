"use client"; 
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import dynamic from "next/dynamic";
const DropdownMenu = dynamic(() => import('./DropdownMenu'));
import { TiLockClosedMini, TiShoppingCartMini } from "@/app/lib/@react-icons";
const Button = dynamic(() => import('../Button/Button'));
const ButtonOutline = dynamic(() => import('../Button/ButtonOutline'));
const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const username = sessionStorage.getItem('username'); 
    if (username) {
      setIsLoggedIn(true); 
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.clear(); 
    setIsLoggedIn(false); 
  };
  const items = [
    {
      id: 0,
      link: "level1",
      namechildern: "مرحلة التأسيس",
    },
    {
      id: 1,
      link: "level2",
      namechildern: "مرحلة الابتدائية",
    },
    {
      id: 2, // Fixed the duplicate ID
      link: "level3",
      namechildern: "مرحلة الإعدادية",
    },
    {
      id: 3, // Fixed the duplicate ID
      link: "level4",
      namechildern: "مرحلة الثانوية",
    },
  ];

  return (
    <div className="hidden h-[100px] w-fit min-[1200px]:flex">
      <ul className="text-[--background] flex space-x-4 md:space-x-6 items-center text-[16px] md:text-[18px] leading-5 md:leading-6 font-normal">
        <li className="active cursor-pointer ml-4 hover:text-[--foreground]">
          <Link className="relative block" href="/">
            الرئيسية
          </Link>
        </li>
        <li className="text-[--background] hover:text-[--foreground] text-center border-b-2 md:border-b-0">
          <DropdownMenu nameDropdown="المذكرات" items={items} />
        </li>
        <li className="cursor-pointer hover:text-[--foreground]">
          <Link className="relative block" href="/">
            الحصص المباشرة
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[--foreground]">
          <Link className="relative block" href="/AllCourses">
            الدورات
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[--foreground]">
          <Link className="relative block" href="/">
            الباقات
          </Link>
        </li>
        <li className="text-[--background] hover:text-[--foreground] text-center">
          <DropdownMenu nameDropdown="مسارات التعلم" items={items} />
        </li>
        <li className="text-[--background] hover:text-[--foreground] text-center">
          <div className="bg-[#f3f3f3ec] rounded-full p-2 cursor-pointer">
            <TiShoppingCartMini size={28} className="text-[--foreground]" />
          </div>
        </li>
        {isLoggedIn ? (
          <li className="text-center">
            <button  onClick={handleLogout}  className="hover:text-[--foreground]">
              حسابي
            </button>
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
                textinner="اشترك الآن"
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
