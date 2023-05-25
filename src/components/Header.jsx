import React from "react";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center ">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to="/">
          <span className="text-3xl">Logo</span>
        </Link>
        <nav className="hidden lg:flex font-semibold gap-x-2">
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
            to="/portfolio"
            className="px-6 py-2.5 transition text-xl rounded-[30px] hover:bg-[#89cff0] hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2.5 transition text-xl rounded-[30px] hover:bg-[#89cff0] hover:text-white"
          >
            Contact
          </Link>
        </nav>
        {/* socials */}
        <Socials />
        {/* mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
