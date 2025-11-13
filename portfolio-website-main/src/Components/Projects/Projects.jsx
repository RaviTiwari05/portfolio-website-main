import React from "react";
import ProjectCard from "./ProjectCard";
import regulatoryImg from "../../assets/regulatory.png";
import smartImg from "../../assets/smart.png";
import pinterestImg from "../../assets/pinterest.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Smart Campus Connect"
          main="A full-stack platform to enhance campus communication and connectivity among students, faculty, and staff."
          sourceLink="https://github.com/RaviTiwari05/WebCode_2024"
          image={smartImg}
        />
        <ProjectCard
          title="Regulatory Change Detector"
          main="An AI-powered web app to compare and analyze changes between two versions of long regulatory documents."
          sourceLink="https://github.com/RaviTiwari05/regulatory-change-detector"
          image={regulatoryImg}
        />
        <ProjectCard
          title="Pinterest Clone"
          main="A full-stack web application designed to replicate the core functionalities of Pinterest, focusing on creating a dynamic, interactive, and user-friendly platform for discovering, saving, and sharing visual content."
          sourceLink="https://github.com/RaviTiwari05/Pinterest-Clone.github.io"
          image={pinterestImg}
        />
      </div>
    </div>
  );
};

export default Projects;
