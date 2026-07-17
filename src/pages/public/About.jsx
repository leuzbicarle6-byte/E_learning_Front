import React from "react";
// import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import AboutHero from "../../components/public/AboutHero";
import MissionVision from "../../components/public/MissionVision";
import Values from "../../components/public/Values";
import Stats from "../../components/public/Stats";

export default function About() {
  return (
    <div>
      {/* <Header/> */}
      <AboutHero />
      <MissionVision />
      <Stats />
      <Values />
      <Footer />
    </div>
  );
}
