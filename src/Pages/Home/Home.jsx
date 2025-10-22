import React from "react";
import HeroSection from "./Sections/HeroSection";
import PopularSkills from "./Sections/PopularSkills";
import SkillDetails from "./Sections/SkillDetails";


const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <div className="max-w-10/12 mx-auto mt-20 px-8">
<h2 className="text-center text-5xl text-[#2f2f2f] mb-4 font-bold">
  Popular Skills
</h2>
<p className="text-center mb-8 text-md w-2/4 mx-auto ">Connect with locals to exchange today’s most popular skills in a trusted space. Turn your talents into opportunities with an easy-to-use local skills marketplace.</p>
      <PopularSkills/>
      {/* <SkillDetails/> */}
      </div>
      
    </div>
  );
};

export default Home;
