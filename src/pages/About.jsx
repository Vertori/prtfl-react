import React from "react";
import avatar2 from "../assets/avatar2.webp";
import techList from "../assets";
import "swiper/css";
import "swiper/css/navigation";
import Qualification from "../components/Qualification";
import TechItem from "../components/TechItem";

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
            I'm Rafał, a 24 years old passionate and self-taught Frontend
            Developer who spends every single day learning new things along with
            solutions, best practices and developing his programming skills. I'm
            always focusing on creating responsive and user-friendly websites.
            Besides, I am an IT technician and a student of IT in business and I
            definitely enjoy discovering new technologies.
          </p>
        </div>

        {/* slider container */}
        <div className="container mx-auto h-max">
          <h1 className="font-primary font-bold text-2xl mb-2">
            Technologies I've been using
          </h1>
          <div className="bg-white border shadow-xl py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6   ">
            {techList.map((item) => {
              return (
                <div className="flex flex-col justify-center items-center h-full px-6">
                  <img
                    className="w-16 sm:w-20 h-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <span className="text-sm sm:text-base">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Qualification section */}
        <Qualification />

        {/* Languages */}
      </div>
    </section>
  );
};

export default About;
