import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.09],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();

  // close mobile nav on route change
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer "
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className={`${
          openMenu ? "shadow-2xl" : "shadow-none"
        } bg-white w-full h-screen absolute top-0 right-0 max-w-xs z-20`}
      >
        {/* close icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
