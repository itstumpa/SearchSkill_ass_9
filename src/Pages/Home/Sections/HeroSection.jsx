import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import group from '../../../assets/group.jpg';
import laptop from '../../../assets/laptop.jpg';
import student from '../../../assets/student.jpg';

const HeroSection = () => {
  
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        className="relative h-[70vh]" 
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <img
              src={group}
              alt="Group"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute z-20 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Welcome to Our Website
              </h2>
              <p className="text-md sm:text-lg md:text-xl mt-4">
                Experience the best of modern design
              </p>
              <button className="btn btn-primary mt-6">Learn More</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <img
              src={student}
              alt="Student"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute z-20 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Innovative Solutions
              </h2>
              <p className="text-md sm:text-lg md:text-xl mt-4">
                We bring your ideas to life with cutting-edge tech
              </p>
              <button className="btn btn-primary mt-6">Discover More</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <img
              src={laptop}
              alt="Laptop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute z-20 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Join Us Today
              </h2>
              <p className="text-md sm:text-lg md:text-xl mt-4">
                Become a part of our growing community
              </p>
              <button className="btn btn-primary mt-6">Get Started</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
