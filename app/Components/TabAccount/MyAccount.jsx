"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./custom-tabs.css"; // Make sure to import the custom CSS file

import Link from "next/link";
import TabEditAccount from "./TabEditAccount";
import TabChangePass from "./TabChangePass";
// Default CSS
// bg-[#f3f3f3ec]


const handleLogout = () => {
  sessionStorage.clear(); 
};
const ReactTabsExample = () => {

  return (
    <section className="pt-32 h-max py-24 px-24 bg-[#f3f3f3ec]  ">
      <Tabs className="shadow-lg bg-white rounded-md ">
        <TabList className="text-[--background] text-xl font-semibold  ">
          <Tab>كورساتي</Tab>
          <Tab>مذكراتي</Tab>
          <Tab>مشترياتي</Tab>
          <Tab>تعديل حسابك</Tab>
          <Tab>تغيير كلمة المرور</Tab>
          <Tab>المساعدة</Tab>
          <Tab>تسجيل الخروج</Tab>
        </TabList>
        <hr />
        <TabPanel>
          {/* كورساتي */}
          <div className="p-4">
            <h2 className="font-[900] text-[--background] text-xl mt-6 py-2">
              تشاهد الان
            </h2>
            <p className="text-slate-400">لم تقم بمشاهدة اى كورسات بعد.</p>
          </div>
        </TabPanel>
        <TabPanel>
          {/* مذكراتي */}
          <div className="p-4">
            <h2 className="font-[900] text-slate-400  mt-6 py-2">
              لم تشتري أي مذكرة
            </h2>
          </div>
        </TabPanel>
        <TabPanel>
          {/* مشترياتي */}
          <div className="p-4">
            <h2 className="font-[900] text-slate-400  mt-6 py-2">
              لم تشتري أي شيء
            </h2>
          </div>
        </TabPanel>
        <TabPanel>
            <TabEditAccount/>
        </TabPanel>
        <TabPanel>
            <TabChangePass/>
        </TabPanel>
        <TabPanel>
            <h2 className="font-[900] text-slate-400  mt-6 py-2">
              للمساعدة والدعم تواصل معنا عبر البريد الالكتروني
              <Link
                href="mailto:info.ishrahli@gmail.com"
                className="text-blue-500 underline">
                info.ishrahli@gmail.com
              </Link>
            </h2>
        </TabPanel>
        <TabPanel>
         <Link href="/"><button  onClick={handleLogout}  className="hover:text-[--foreground]">تسجيل الخروج </button></Link>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ReactTabsExample;
