import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center text-center md:text-left"
    >
      {/* Left Section */}
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      {/* Right Section */}
      <ul className="text-sm md:text-xl space-y-3">
        {/* Email */}
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <MdOutlineEmail size={22} />
          <a
            href="mailto:ravifzd05@gmail.com"
            className="hover:underline hover:text-gray-200"
          >
            ravifzd05@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/ravi-tiwari-7a6786287"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-200"
          >
            linkedin.com/in/ravi-tiwari-7a6786287
          </a>
        </li>

        {/* GitHub */}
        <li className="flex gap-2 items-center justify-center md:justify-start">
          <FaGithub size={22} />
          <a
            href="https://github.com/RaviTiwari05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-gray-200"
          >
            github.com/RaviTiwari05
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
