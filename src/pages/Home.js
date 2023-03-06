import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import FeelSpecialSection from "../components/FeelSpecialSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SecurityFirst from "../components/SecurityFirst";
import ShowCase from "../components/ShowCase";
import BrandSection from "../components/BrandSection";
import WindowPeak from "../components/WindowPeak";
import MobileScroll from "../components/MobileScroll";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShowCase />
      <FeelSpecialSection />
      <BrandSection />
      <ExperienceSection />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>

      <SecurityFirst />
    </div>
  );
};

export default Home;
