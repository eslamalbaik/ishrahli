import React, { Suspense, lazy } from "react";
const AllCourses = lazy(() => import("./Components/Home/AllCourses"));
const BestNotes = lazy(() => import("./Components/Home/BestNotes"));
const BestPackages = lazy(() =>
  import("./Components/Home/Packages/BestPackages")
);
const BeTeacher = lazy(() => import("./Components/Home/BeTeacher"));
const Contact = lazy(() => import("./Components/Home/Contact"));
const Features = lazy(() => import("./Components/Home/Features"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));
const Hero = lazy(() => import("./Components/Home/Hero"));
const Loading = lazy(() => import("./Components/Loading"));
const Reviews = lazy(() => import("./Components/Home/Reviews/Reviews"));

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Hero />
      <Features />
      <BestPackages />
      <AllCourses />
      <BestNotes />
      <Reviews />
      <BeTeacher />
      <Contact />
      <Footer />
    </Suspense>
  );
}
