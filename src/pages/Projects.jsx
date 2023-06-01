import React from "react";
import ProjectBox from "../components/ProjectBox";
import { projectsList } from "../assets";

const Projects = () => {
  return (
    <section className="section bg-[#FCFCFC]">
      <div className="container mx-auto min-h-full pt-52 px-4 pb-28">
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
    </section>
  );
};

export default Projects;
