import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] flex items-center transition-all duration-500`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to="/">
          <span className="text-3xl text-gray-500">
            {String.fromCharCode(60)}
          </span>
          <span className="text-3xl">Rafał Fikus </span>
          <span className="text-3xl text-gray-500">
            {String.fromCharCode(47)}
            {String.fromCharCode(62)}
          </span>
        </Link>
        <nav className="hidden xl:flex font-semibold gap-x-2">
          <Link
            to="/"
            className={`${
              currentRoute === "/" ? "bg-black text-white" : "bg-none"
            } px-6 py-2.5 transition duration-300 text-xl rounded-[30px] hover:bg-black hover:text-white `}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              currentRoute === "/about" ? "bg-black text-white" : "bg-none"
            } px-6 py-2.5 transition duration-300  text-xl rounded-[30px] hover:bg-black hover:text-white`}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className={`${
              currentRoute === "/projects" ? "bg-black text-white" : "bg-none"
            } px-6 py-2.5 transition duration-300  text-xl rounded-[30px] hover:bg-black hover:text-white`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`${
              currentRoute === "/contact" ? "bg-black text-white" : "bg-none"
            } px-6 py-2.5 transition duration-300  text-xl rounded-[30px] hover:bg-black hover:text-white`}
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
