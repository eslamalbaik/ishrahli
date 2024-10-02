import AllCourses from "./Components/AllCourses";
import BestNotes from "./Components/BestNotes";
import BestPackages from "./Components/BestPackages";
import BeTeacher from "./Components/BeTeacher";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";

export default function Home() {
  return (
   <>
        <Header/>
   <Hero/>
   <Features/>
   <BestPackages/>
   {/* <AllCourses/> */}
   {/* <BestNotes/> */}
   {/* <Reviews/> */}
   <BeTeacher/>
   <Contact/>
   <Footer/>
   </>
  );
}
