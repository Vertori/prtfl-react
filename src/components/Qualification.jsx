import React, { useState } from "react";
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import EducationPath from "./EducationPath";
import WorkPath from "./WorkPath";

const Qualification = () => {
  const [selectedCategory, setSelectedCategory] = useState("Education");

  return (
    <div className="bg-white border shadow-xl p-8 w-full flex flex-col justify-center items-center gap-y-6">
      {/* Title */}
      <div>
        <h2 className="font-primary font-bold text-2xl">Qualification</h2>
        <p className="text-base text-gray-600">My personal journey</p>
      </div>
      {/* buttons */}
      <div className="flex gap-x-12">
        <button
          onClick={() => setSelectedCategory("Education")}
          className={`flex gap-x-2 items-center justify-center text-2xl hover:text-[#89cff0] transition ${
            selectedCategory === "Education"
              ? "text-[#89cff0]"
              : "text-gray-600"
          }`}
        >
          <IoIosSchool />
          <span>Education</span>
        </button>
        <button
          onClick={() => setSelectedCategory("Work")}
          className={`flex gap-x-2 items-center justify-center text-2xl hover:text-[#89cff0] transition ${
            selectedCategory === "Work" ? "text-[#89cff0]" : "text-gray-600"
          }`}
        >
          <MdWork />
          <span>Work</span>
        </button>
      </div>
      {/* displayed journey */}
      <div>
        {selectedCategory === "Education" && <EducationPath />}
        {selectedCategory === "Work" && <WorkPath />}
      </div>
    </div>
  );
};

export default Qualification;
