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
            <Hero />
            <Features />
          <BestPackages /> 
           <AllCourses /> 
           <BestNotes /> 
           <Reviews /> 
            <BeTeacher />
            <Contact />
        </MainLayout>
    );
}
