import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar1.webp";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={transition1}
      className="section flex items-center justify-center px-4 bg-[#FCFCFC]"
    >
      <div className="container h-full flex flex-col lg:flex-row items-center gap-x-32 pt-36 xl:pt-0">
        <Socials />
        {/* text */}
        <div className="text-center lg:text-start">
          <h1 className="h1">Rafał Fikus </h1>
          <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
            Frontend React Developer
          </p>
          <Link to={"/projects"} className="btn mb-[30px]">
            Check my projects
          </Link>
        </div>
        {/* img */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition1}
          className="max-w-[200px] md:max-w-full"
        >
          <img className="rounded-full shadow-2xl" src={avatar} alt="avatar" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
