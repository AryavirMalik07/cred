import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import FeelSpecialSection from "../components/FeelSpecialSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShowCase from "../components/ShowCase";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShowCase />
      <FeelSpecialSection />
      <ExperienceSection />
    </div>
  );
};

export default Home;
