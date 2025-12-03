import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import group from '../../../assets/group.jpg';
import laptop from '../../../assets/laptop.jpg';
import student from '../../../assets/student.jpg';

const HeroSection = () => {
  
  return (
    <div className="relative pt-28 max-w-10/12 mx-auto rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        navigation={false}
        className="relative h-[70vh] w-full" 
      >
         {/* Slide 1 - Education Excellence */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <img
              src={group}
              alt="Digital learning"
              className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
              style={{ animation: 'kenburns 8s ease-out forwards' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-10"></div>
            <div className="absolute z-20 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white px-8">
               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Empowering Future Leaders
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Transform your potential into excellence with world-class education and collaborative learning environments
              </p>
              <button className="btn btn-primary mt-8 px-8 py-3 text-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                Start Your Journey
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Individual Growth */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <img
              src={student}
              alt="Student learning"
              className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
              style={{ animation: 'kenburns 8s ease-out forwards' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-10"></div>
            <div className="absolute z-20 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white px-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Learn at Your Own Pace
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Access personalized learning paths designed to match your goals, schedule, and learning style
              </p>
              <button className="btn btn-primary mt-8 px-8 py-3 text-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                Explore Courses
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Technology & Innovation */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh] ">
            <img
              src={laptop}
              alt="Digital learning"
              className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
              style={{ animation: 'kenburns 8s ease-out forwards' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-10"></div>
            <div className="absolute z-20 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white px-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                Innovation Meets Education
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                Experience cutting-edge learning technology that adapts to your needs and prepares you for tomorrow
              </p>
              <button className="btn btn-primary mt-8 px-8 py-3 text-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                Join Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px;
          border-radius: 6px;
        }

        .swiper-slide img {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;