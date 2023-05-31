import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import netflix1 from "../assets/websites/netflix1.png";
import netflix2 from "../assets/websites/netflix2.png";
import netflix3 from "../assets/websites/netflix3.png";

const ProjectBox = () => {
  return (
    <>
      {/* Project 1 */}
      <div className="flex flex-col xl:flex-row gap-x-6 w-full bg-white border shadow-xl p-4">
        {/* image */}
        <div className="">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={4}
            slidesPerView={"auto"}
            slidesPerGroup={1}
            navigation={true}
          >
            <SwiperSlide>
              <img className="h-full w-full" src={netflix1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full w-full" src={netflix2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="h-full w-full" src={netflix3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* description */}
        <div className="flex-1 flex flex-col gap-y-4">
          <h2 className="font-primary font-bold text-2xl">
            E-commerce website
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            quo magnam debitis velit labore vitae maxime consectetur ad cumque
            repellat voluptatem officiis quod maiores tenetur molestias ipsa
            nihil, totam molestiae sint eligendi pariatur rem at! Autem
            inventore blanditiis officiis perferendis?
          </p>
          {/* tags */}
          <div className="flex flex-wrap gap-4">
            <p className="bg-blue-200 px-[10px] py-[2px] rounded-[50px]">
              React
            </p>
            <p className="bg-blue-200 px-[10px] py-[2px] rounded-[50px]">
              Tailwind
            </p>
            <p className="bg-blue-200 px-[10px] py-[2px] rounded-[50px]">
              Tailwind
            </p>
            <p className="bg-blue-200 px-[10px] py-[2px] rounded-[50px]">
              Tailwind
            </p>
            <p className="bg-blue-200 px-[10px] py-[2px] rounded-[50px]">
              Tailwind
            </p>
          </div>
          {/* redirecting buttons */}
          <div className="flex flex-col xl:flex-row gap-4 mt-9">
            <button className="btn flex gap-x-2">
              <p>Live</p>
              <FiExternalLink className="text-xl" />
            </button>
            <button className="btn flex gap-x-2">
              Code
              <BsGithub className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
