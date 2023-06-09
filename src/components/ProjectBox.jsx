import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ProjectBox = ({ item }) => {
  const { name, description, images, tags, liveLink, codeLink } = item;
  return (
    <>
      {/* Project 1 */}
      <div className="flex flex-col xl:flex-row gap-x-6 w-full bg-white border shadow-xl p-4">
        {/* image */}
        <div className="">
          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={"auto"}
            slidesPerGroup={1}
            navigation={true}
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    className="h-full w-full select-none"
                    src={image}
                    alt={name}
                    loading="lazy"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* description */}
        <div className="flex-1 flex flex-col gap-y-4">
          <h2 className="font-primary font-bold text-2xl">{name}</h2>
          <p>{description}</p>
          {/* tags */}
          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => {
              return (
                <p
                  className="bg-blue-200 px-[10px] py-[2px] rounded-[50px]"
                  key={index}
                >
                  {tag}
                </p>
              );
            })}
          </div>
          {/* redirecting buttons */}
          <div className="flex flex-col xl:flex-row gap-4 mt-[34px]">
            <a href={liveLink} target="_blank">
              <button className="btn flex gap-x-2">
                <p>Live</p>
                <FiExternalLink className="text-xl" />
              </button>
            </a>
            <a href={codeLink} target="_blank">
              <button className="btn flex gap-x-2">
                Code
                <BsGithub className="text-xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
