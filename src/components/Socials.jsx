import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://linkedin.com/" target="_blank" className="text-xl">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" className="text-xl">
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
