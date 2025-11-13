import React from "react";

const ProjectCard = ({ title, main, sourceLink, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 rounded-2xl" src={image} alt={`${title} Banner`} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      {/* Centered button */}
      <div className="mt-4 flex justify-center">
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 md:py-2 md:px-6 text-sm md:text-lg hover:opacity-85 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
