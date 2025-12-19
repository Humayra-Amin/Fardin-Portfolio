import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#251C31] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-white">

        {/* Heading */}
        <h1 className="lg:text-5xl text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          LET’S WORK <br /> TOGETHER
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl">
          I’m always open to discussing new projects, innovative ideas, or
          opportunities to collaborate on exciting development work.
        </p>

        {/* Location */}
        <div className="flex items-center gap-3 mt-8 text-gray-300 text-lg">
          <FaMapMarkerAlt className="text-purple-500" />
          <span>
            Based in:{" "}
            <span className="font-semibold text-white">
              Chittagong, Bangladesh
            </span>
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6">

          {/* Email */}
          <a
            href="mailto:fardinfarabi1998@gmail.com"
            className="flex items-center justify-center gap-3 
                       border-2 border-purple-500 text-purple-400
                       px-10 py-4 text-lg font-semibold tracking-wide
                       hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            EMAIL ME <FaEnvelope />
          </a>

          {/* Call */}
          <a
            href="tel:+8801878131404"
            className="flex items-center justify-center gap-3
                       border-2 border-gray-400 text-gray-300
                       px-10 py-4 text-lg font-semibold tracking-wide
                       hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
          >
            CALL ME <FaPhoneAlt />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
