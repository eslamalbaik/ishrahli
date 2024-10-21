import dynamic from "next/dynamic";
import BeTeacher from "./Components/Home/BeTeacher";
import MainLayout from "./MainLayout/MainLayout";
import Contact from "./Components/Home/Contact";
import Features from "./Components/Home/Features";
import Hero from "./Components/Home/Hero";

const AllCourses = dynamic(() =>
    import("./Components/Home/AllCourses/AllCourses")
);
const BestNotes = dynamic(() =>
    import("./Components/Home/BestNotes/BestNotes")
);
const BestPackages = dynamic(() =>
    import("./Components/Home/Packages/BestPackages")
);
const Reviews = dynamic(() => import("./Components/Home/Reviews/Reviews"), {
    ssr: false,
});
import TabbedForm from "./Components/TabAccount/TabbedForm";
export default function Home() {
    return (
        <MainLayout>
      <TabbedForm />

        </MainLayout>
    );
}
// الرئيسية (Al-Raisia) - Home page 
// حساب جديد (Hisab Jadid) - New Account
// تسجيل الدخول (Tasjil Al-Dukhul) - Login
// الطالب (Al-Talib) - Student
// مرحلة التأسيس (Marhalat Al-Tasis) - Foundation Stage
// المرحلة الابتدائية (Al-Marhala Al-Ibtidaiya) - Primary Stage
// المرحلة المتوسطة (Al-Marhala Al-Mutawasita) - Intermediate Stage
// المرحلة الثانوية (Al-Marhala Al-Thanawiya) - Secondary Stage
// المذكرات (Al-Mudhakkirat) - Memoranda/Notes
// الباقات (Al-Baqat) - Packages
// الحصص المباشرة (Al-Hisas Al-Mubashira) - Live Sessions
// الدورات (Al-Dawrat) - Courses
// القدرات (Al-Qudurat) - Abilities/Aptitudes
// السلة (Al-Salla) - Cart
// صفحة الدفع (Safhat Al-Daf') - Payment Page
// حمل التطبيق الخاص بنا (Hammil Al-Tatbiq Al-Khas Bina) - Download Our App