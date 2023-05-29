import React from "react";
import { BsCalendar3 } from "react-icons/bs";

const WorkPath = () => {
  return (
    <>
      {/* Work Container */}
      <div>
        {/* Work data 1 */}
        <div className="grid grid-cols-[1fr,max-content,1fr]">
          <div className="text-center px-2 flex flex-col">
            <h3 className="font-medium text-base">Quality Controller</h3>
            <span className="text-sm mb-4">Wrzeciono Sp. z o. o.</span>
            <div className="text-sm text-gray-400 flex items-center justify-center gap-x-2">
              <BsCalendar3 />
              <span>2020 - 2022</span>
            </div>
          </div>
          <div>
            <span className="inline-block w-[13px] h-[13px] rounded-full bg-[#89cff0]"></span>
            <span className="block w-[1px] h-full bg-[#89cff0] translate-x-[6px] -translate-y-[7px]"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPath;
