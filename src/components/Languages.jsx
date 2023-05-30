import React from "react";
import { currentlyLearning } from "../assets";
import "swiper/css";
import "swiper/css/navigation";
import TechItem from "../components/TechItem";

const Languages = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {/* Languages list */}
      <div className="flex flex-col gap-y-4 bg-white border shadow-xl p-8 w-full ">
        <h2 className="font-primary font-bold text-2xl">Languages</h2>
        {/* Polish */}
        <div className="flex justify-between border-b">
          <h3 className="text-lg">Polish</h3>
          <p className="text-gray-600">Native</p>
        </div>
        {/* English */}
        <div className="flex justify-between border-b">
          <h3 className="text-lg">English</h3>
          <p className="text-gray-600">Advanced</p>
        </div>
        {/* German */}
        <div className="flex justify-between border-b">
          <h3 className="text-lg">German</h3>
          <p className="text-gray-600">Basic</p>
        </div>
      </div>
      {/* Currently learning */}
      <div className="bg-white border shadow-xl p-8 w-full flex flex-col h-full">
        <h2 className="font-primary font-bold text-2xl">Currently Learning</h2>
        {/* Displayed currently learning */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4">
          {currentlyLearning.map((item) => {
            return <TechItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Languages;
