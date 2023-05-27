import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="xl:ml-24">
      <ul className="flex gap-x-6 xl:gap-x-0 gap-y-6 mb-4 xl:mb-0 flex-row lg:flex-col justify-center items-center">
        <li>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-3xl hover:text-[#89cff0] transition"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            className="text-3xl hover:text-[#89cff0] transition"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
