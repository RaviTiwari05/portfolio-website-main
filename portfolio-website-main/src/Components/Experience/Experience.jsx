import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGraduationCap, FaSchool } from "react-icons/fa";
import { SiRedis, SiMongodb } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills and Education</h1>

      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>

        {/* Education Section */}
        <div>
          {/* College */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGraduationCap color="#FFD700" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Motilal Nehru National Institute of Technology Allahabad
              </h2>
              <p className="text-sm leading-tight font-thin">2022 - Present</p>
              <ul className="text-sm p-2">
                <li>- B.Tech in Civil Engineering</li>
                <li>- CPI: 8.46/10 (Till 6th semester)</li>
              </ul>
            </span>
          </div>

          {/* Intermediate School */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaSchool color="#4FC3F7" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Innovative Minds Academy Ayodhya</h2>
              <p className="text-sm leading-tight font-thin">2020 - 2022</p>
              <ul className="text-sm p-2">
                <li>- CBSE Board, Class XII</li>
                <li>- Percentage: 91.2%</li>
              </ul>
            </span>
          </div>

          {/* High School */}
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <PiCertificateFill color="#81C784" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Jawahar Navodaya Vidyalaya Ayodhya</h2>
              <p className="text-sm leading-tight font-thin">2015 - 2020</p>
              <ul className="text-sm p-2">
                <li>- CBSE Board, Class X</li>
                <li>- Percentage: 93.8%</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
