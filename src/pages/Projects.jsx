import React from "react";
import ProjectBox from "../components/ProjectBox";
import { projectsList } from "../assets";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto min-h-full pt-40 px-4 pb-28">
        <div className="pb-6">
          <h1 className="h1 text-center">Some of my projects</h1>
        </div>
        {/* Displayed projects container*/}
        <div className="flex flex-col gap-y-8">
          {projectsList.map((item) => {
            return <ProjectBox item={item} key={item.id} />;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
