import dynamic from "next/dynamic";
const MainLayout = dynamic(() => import('./MainLayout/MainLayout'),{ ssr: false });
const Loading = dynamic(() => import("./Components/Loading"),{ ssr: false });
const AllCourses = dynamic(() => import('./Components/Home/AllCourses'),{ ssr: false });
const BestNotes = dynamic(() => import('./Components/Home/BestNotes'),{ ssr: false });
const BestPackages = dynamic(() => import('./Components/Home/Packages/BestPackages'),{ ssr: false });
const BeTeacher = dynamic(() => import('./Components/Home/BeTeacher'),{ ssr: false });
const Contact = dynamic(() => import('./Components/Home/Contact'),{ ssr: false });
const Features = dynamic(() => import('./Components/Home/Features'),{ ssr: false });
const Hero = dynamic(() => import('./Components/Home/Hero'),{ ssr: false });
const Reviews = dynamic(() => import('./Components/Home/Reviews/Reviews'),{ ssr: false });
export default function Home() {
  return (
      <MainLayout>
      <Hero />
      <Features />
      <BestPackages />
      <AllCourses />
      <BestNotes />
      {/* <Reviews /> */}
      <BeTeacher />
      <Contact />
     </MainLayout>
  );
}
