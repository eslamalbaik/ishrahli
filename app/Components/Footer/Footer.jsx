
"use client"; 
import Link from 'next/link'
import dynamic from 'next/dynamic';
const Copyright = dynamic(() => import('./Copyright'));
const Logo = dynamic(() => import('../Logo'));

const Footer = () => {

  return (
    <footer className="  font-[family-name:var(--font-Cairo-Medium)]    bg-white">
      <div className="   border-t-2 text-center lg:px-[100px] text-[#00052E] ">
        <div className="mx-6 py-10 text-center md:text-right">
          <div className="grid-1 grid  gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <div className="mb-4   md: flex items-center justify-center font-semibold uppercase md:justify-start">
               {/* logo  */}
               <Logo/>
              </div>
              <p className="font-[family-name:var(--font-Cairo-ExtraLight)]">
                ندرس أسلوب للتفوق بطريقة آمنة توفر وقت وجهد الطلاب
                أسلوب للتفوق بطريقة آمنة توفر وقت وجهد الطلاب
              </p>
            </div>
            <div className="">
              <div className="mb-4 relative flex  font-[family-name:var(--font-Cairo-Black)] text-[#00052E] justify-center  uppercase md:justify-start">
                المراحل الدراسية
                <p className="border-[#00052E] absolute right-0 top-7 w-8 border-b-4"></p>
              </div>
              <p className="mb-4 font-thin cursor-pointer">
                <span className="  ">
                المرحلة الابتدائية
                </span>
              </p>
              <p className="mb-4  cursor-pointer">
                <span className=" ">
                  المرحلة الاعدادية
                </span>
              </p>
              <p className="mb-4  cursor-pointer">
                <span className=" ">
           المرحلة الثانوية
                </span>
              </p>
            </div>
            <div className="">
              <div className="mb-4 relative   cursor-pointer font-[family-name:var(--font-Cairo-Black)] text-[#00052E] flex justify-center font-semibold uppercase md:justify-start">
                عن ندرس
                <p className="border-[#00052E] absolute right-0 top-7 w-8 border-b-4"></p>
              </div>
              <p className="mb-4">
                <span className=" cursor-pointer ">
                  الشروط والأحكام
                </span>
              </p>
              <p className="mb-4">
                <Link href="/PrivacyPolicy">
                  <span className="  cursor-pointer ">
                    سياسة الخصوصية
                  </span>
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/FrequentlyAsk">
                  <span className="  cursor-pointer">
                    اسئلة مكررة
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <div className="mb-4 relative cursor-pointer  font-[family-name:var(--font-Cairo-Black)] text-[#00052E] flex justify-center font-semibold uppercase md:justify-start">
                تواصل معنا
                <p className="border-[#00052E] absolute right-0 top-7 w-8 border-b-4"></p>
              </div>

              <p className="mb-4 cursor-pointer flex items-center justify-center  gap-2 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5 "
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                westudy2023.com
              </p>
              <p className="mb-4 cursor-pointer flex items-center justify-center  gap-2 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex cursor-pointer items-center justify-center  gap-2 md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;