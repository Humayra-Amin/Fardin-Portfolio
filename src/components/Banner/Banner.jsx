import React from "react";
import profile from "../../assets/images/propic.png";
import profile1 from "../../assets/images/pics.png";

const Banner = () => {
  return (
    <div className="bg-[#251C31] text-white min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden relative">
      
      {/* MAIN WRAPPER */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-16">

        {/* LEFT SECTION (TEXT) */}
        <div className="max-w-xl relative">
          
          {/* BACKGROUND TITLE */}
          <h1 className="absolute -top-56 left-[1%] -translate-x-[1%] text-[120px] font-extrabold text-white/10 tracking-widest z-0 select-none whitespace-nowrap">
            UI/UX Designer
          </h1>

          {/* NAME */}
          <h2 className="mt-10 text-2xl font-semibold flex items-center gap-2 relative z-10">
            <span className="text-purple-400 text-3xl">✱</span>
            Fardin Farabi Chowdhury
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-300 text-lg leading-relaxed relative z-10">
            I'm a passionate UI/UX Designer focused on crafting intuitive, clean,
            and user-friendly digital experiences. Specialized in web & mobile app
            design, I turn ideas into elegant interfaces that truly connect.
          </p>

          {/* BUTTON */}
          <button className="mt-8 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-lg transition-all relative z-10">
            Download CV
          </button>
        </div>

        {/* IMAGE + PURPLE RINGS */}
        <div className="relative flex justify-center items-center min-w-[380px]">
          <div className="absolute w-[420px] h-[420px] rounded-full border-4 border-purple-500 opacity-40 animate-spin"></div>
          <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-purple-300 opacity-60 animate-spin"></div>

          <img src={profile} alt="Profile" className="relative w-80 h-[450px] object-cover rounded-xl lg:mb-44"/>
        </div>

        {/* RIGHT SIDE STATS */}
        <div className="max-w-md lg:text-left text-center lg:ml-20">
          <h2 className="text-2xl font-semibold flex items-center gap-2 justify-center lg:justify-start">
            <span className="text-purple-400 text-3xl">✱</span>
            Digital Domination
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Expertly crafting digital products with attention to detail, clean
            layouts, and seamless interaction flow. Focused on bringing impactful
            and functional design to life.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-10">
            <div>
              <h3 className="text-4xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-300 text-sm">Project Complete</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-purple-400">100%</h3>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
