import React from "react";
import avatar2 from "../assets/avatar2.webp";
import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  tailwindLogo,
  firebaseLogo,
} from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const About = () => {
  return (
    <section className="section bg-[#FCFCFC]">
      <div className="container mx-auto h-full pt-52 px-4 flex flex-col gap-y-12">
        {/* About me */}
        <div className="w-full bg-white border shadow-xl p-12  xl:p-4 relative">
          <img
            className="absolute right-[50%] -top-24 translate-x-1/2 lg:translate-x-0 lg:right-0 lg:-top-20 max-w-[140px] lg:max-w-[160px] lg:rotate-12"
            src={avatar2}
            alt="avatar"
          />
          <h1 className="h1 mb-4 text-center lg:text-start">About Me</h1>
          <p className="text-[20px] text-primary text-center lg:text-start">
            I'm Rafał, a passionate and self-taught Frontend Developer who
            spends every single day learning new things and developing his
            programming skills. Besides, I am an IT technician and a student of IT in
            business and I definitely enjoy discovering new technologies.
          </p>
        </div>

        {/* slider container */}
      </div>
    </section>
  );
};

export default About;
