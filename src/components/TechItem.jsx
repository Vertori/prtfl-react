import React from "react";

const TechItem = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-2">
      <img className="w-14 sm:w-18 h-full" src={item.image} alt={item.name} />
      <span className="text-sm sm:text-base whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
};

export default TechItem;
