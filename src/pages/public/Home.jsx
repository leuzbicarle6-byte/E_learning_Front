import React from "react";
import Header from "../../components/public/Header";
import Hero from "../../components/public/Hero";
import CourseGrid from "../../components/public/CourseGrid";
import Footer from "../../components/public/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <CourseGrid/>
      <Footer/>
    </div>
  );
}
