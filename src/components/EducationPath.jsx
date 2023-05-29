import React from "react";
import { BsCalendar3 } from "react-icons/bs";

const EducationPath = () => {
  return (
    <>
      {/* Education container*/}
      <div>
        {/* Education data 1 */}
        <div className="grid grid-cols-[1fr,max-content,1fr]">
          <div className="text-center px-2 flex flex-col">
            <h3 className="font-medium text-base">IT in business</h3>
            <span className="text-sm text-gray-400">master's degree</span>
            <span className="text-sm mb-4">
              University of Economics in Wrocław
            </span>
            <div className="text-sm text-gray-400 flex items-center justify-center gap-x-2">
              <BsCalendar3 />
              <span>2022 - now</span>
            </div>
          </div>
          <div>
            <span className="inline-block w-[13px] h-[13px] rounded-full bg-[#89cff0]"></span>
            <span className="block w-[1px] h-full bg-[#89cff0] translate-x-[6px] -translate-y-[7px]"></span>
          </div>
        </div>
        {/* Education data 2 */}
        <div className="grid grid-cols-[1fr,max-content,1fr]">
          <div></div>

          <div>
            <span className="inline-block w-[13px] h-[13px] rounded-full bg-[#89cff0]"></span>
            <span className="block w-[1px] h-full bg-[#89cff0] translate-x-[6px] -translate-y-[7px]"></span>
          </div>

          <div className="text-center px-2 flex flex-col">
            <h3 className="font-medium text-base">Management</h3>
            <span className="text-sm text-gray-400">bachelor's degree</span>
            <span className="text-sm mb-4">
              University of Economics in Wrocław
            </span>
            <div className="text-sm text-gray-400 flex items-center justify-center gap-x-2">
              <BsCalendar3 />
              <span>2019 - 2022</span>
            </div>
          </div>
        </div>
        {/* Education data 3 */}
        <div className="grid grid-cols-[1fr,max-content,1fr]">
          <div className="text-center px-2 flex flex-col">
            <h3 className="font-medium text-base">IT Technician</h3>
            <span className="text-sm mb-4">
              Technical school No. 5 in Opole
            </span>
            <div className="text-sm text-gray-400 flex items-center justify-center gap-x-2">
              <BsCalendar3 />
              <span>2015-2019</span>
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

export default EducationPath;
