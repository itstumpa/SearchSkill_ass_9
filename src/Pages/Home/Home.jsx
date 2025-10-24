import React from "react";
import HeroSection from "./Sections/HeroSection";
import PopularSkills from "./Sections/PopularSkills";
import TopCourseMarquee from "./Sections/TopCourseMarquee";
import HowitWorks from "./Sections/HowitWorks";
import Testimonials from "./Sections/Testimonials";
import Discount from "./Sections/Discount";


const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />

      <div className="bg-linear-to-r from-indigo-50 via-white to-indigo-50">
      <div className="max-w-10/12 mx-auto pt-20 px-8">

<h2 className="text-center text-2xl md:3xl lg:text-5xl text-[#2f2f2f] mb-4 font-bold">
  Popular Skills
</h2>
<p className="text-center mb-8 text-sm md:text-md lg:w-2/4 mx-auto ">Connect with locals to exchange today’s most popular skills in a trusted space. Turn your talents into opportunities with an easy-to-use local skills marketplace.</p>
      <PopularSkills/>
      </div>
      
      </div>

      <div>
        <Discount/>
      </div>

      <div className="">

        <TopCourseMarquee/>
      </div>
      <div>
        <Testimonials/>
      </div>

      

      <div className=" bg-linear-to-r from-indigo-50 via-white to-indigo-50" >
        <HowitWorks/>
      </div>
      
      
    </div>
  );
};

export default Home;
