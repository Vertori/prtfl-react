import React from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to="/">
          <span className="text-3xl text-gray-500">
            {String.fromCharCode(60)}
          </span>
          <span className="text-3xl"> Rafał Fikus </span>
          <span className="text-3xl text-gray-500">
            {String.fromCharCode(47)}
            {String.fromCharCode(62)}
          </span>
        </Link>
        <nav className="hidden xl:flex font-semibold gap-x-2">
          <Link
            to="/"
            className="px-6 py-2.5 transition text-xl rounded-[30px] hover:bg-[#89cff0] hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-6 py-2.5 transition text-xl rounded-[30px] hover:bg-[#89cff0] hover:text-white"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-6 py-2.5 transition text-xl rounded-[30px] hover:bg-[#89cff0] hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 transition text-xl rounded-[30px] hover:bg-[#89cff0] hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
