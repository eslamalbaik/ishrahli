import Image from 'next/image'
import { IoMdDownloadMini, MdOutlineNotificationsActiveMini } from '../../lib/@react-icons';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button'
const Hero = () => {

  return (
     <div className="w-full bg-[#f3f3f3ec] py-24 px-12  md:py-36 md:px-24  text-[--background] font-[family-name:var(--font-Cairo-Medium)] flex-nowrap md:flex-warp   flex justify-between items-center"  >
      <div  className='flex  relative justify-start items-start gap-6 flex-col'>
          <div className='hidden md:block absolute left-8 top-4 w-12 h-12 '>
          <Image
          src="/images/hero-1.svg"
          alt="صورة الصفحة الهيرو ندرس"
          width={50}
          height={50}
          priority
        />
          </div>
        <h1 className='w-full text-[40px]  md:text-[40px]  font-[family-name:var(--font-Cairo-Medium)]'>
        تجربة تعليمية مميزة على <br />
        <span className="text-[--foreground]">منصة اشرحلي 
        </span> دروس واختبارات
        <br />الكترونية  شرح مباشر مع<span className="text-[--foreground]"> افضل <br /> المعلمين</span>  
        </h1>
        <p className="text-[17px]">اتعلم بطريقة سهلة ونظم مواعيدك مع منصة اشرحلي</p>
        <div className="flex justify-center items-center gap-3">
        <Button textinner="تصفح المسارات" nameLink='about' ClassNameAdd='  bg-[--foreground]  ' />
        <Link href='/'>
        <button className=" hover:bg-[--foreground] flex items-center gap-1 hover:border-[--foreground]  text-[--background] border-2 border-[--background] px-6 text-[16px] py-4 hover:shadow-xl transition-all  rounded-lg">
        حمل التطبيق <IoMdDownloadMini/>
        </button> 
        </Link>
        </div>
      </div>
      <div className='mt-8 w-1/2 relative'>
        <Image
          src="/images/home-02.png"
          alt="صورة الصفحة الهيرو ندرس"
          width={500}
          height={400}
          className="w-full h-auto"
          priority
        />
        <div className="hidden md:block absolute right-2 -bottom-16 ">
     <div className="bg-white relative rounded-xl w-[250px] h-fit p-4">

<div className="bg-[#FFC221] absolute -top-4 -right-4 rounded-full flex justify-center items-center p-2">
      <MdOutlineNotificationsActiveMini size={30} className= " text-white"/>
      </div>
      <div className="  text-[14px] mr-2 py-4">
      <p>&quot;التعليم هو اقوى سلاح يمكنك استعماله لتغيير العالم&quot;</p>
      <p>— نيلسون مانديلا</p>
      </div>
    </div>
 </div>
      </div>
    </div>

  )
}

export default Hero