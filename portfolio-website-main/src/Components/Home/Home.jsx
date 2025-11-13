import React from "react";
import avatarImg from "../../assets/c.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          A final year student at NIT Allahabad
        </p>

        {/* Scroll to footer on click */}
        <a href="#Footer" className="inline-block">
          <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>

      <div>
        <img src={avatarImg} alt="Ravi Tiwari" className="max-w-xs md:max-w-md" />
      </div>
    </div>
  );
};

export default Home;
