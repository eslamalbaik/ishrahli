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
export default function Home() {
    return (
        <MainLayout>
            <Hero/>
            <Features/>
            <AllCourses/>
            <BestNotes/>
            <BestPackages/>
            <Reviews/>
            <Contact/>
        </MainLayout>
    );
}
// الرئيسية (Al-Raisia) - Home page  ****** Done
// حساب جديد (Hisab Jadid) - New Account  ****** Done
// تسجيل الدخول (Tasjil Al-Dukhul) - Login  ****** Done
// الطالب (Al-Talib) - Student  ****** Done
// الدورات (Al-Dawrat) - Courses   ****** Done
// مرحلة التأسيس (Marhalat Al-Tasis) - Foundation Stage
// المرحلة الابتدائية (Al-Marhala Al-Ibtidaiya) - Primary Stage
// المرحلة المتوسطة (Al-Marhala Al-Mutawasita) - Intermediate Stage
// المرحلة الثانوية (Al-Marhala Al-Thanawiya) - Secondary Stage
// المذكرات (Al-Mudhakkirat) - Memoranda/Notes
// الباقات (Al-Baqat) - Packages
// الحصص المباشرة (Al-Hisas Al-Mubashira) - Live Sessions
// القدرات (Al-Qudurat) - Abilities/Aptitudes
// السلة (Al-Salla) - Cart
// صفحة الدفع (Safhat Al-Daf') - Payment Page
