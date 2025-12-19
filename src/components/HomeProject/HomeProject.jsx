import React from "react";

import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.jpg";
import project3 from "../../assets/images/project3.jpg";
import project4 from "../../assets/images/project4.jpg";
import project5 from "../../assets/images/project5.jpg";
import { Link } from "react-router-dom";

const HomeProject = () => {
  return (
    <div className="bg-[#251C31] py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-4xl font-bold mb-4 text-white federant">
          Projects
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mt-4">
          Building the Foundation for a{" "}
          <span className="text-purple-400">Creative Portfolio</span>
        </h2>
        <p className="text-gray-400 mt-6">
          A curated selection of UI/UX and web projects designed with
          clarity, structure, and modern visual systems.
        </p>
      </div>

      {/* Grid */}
      <div className="w-11/12 mx-auto space-y-6">
        {/* Top row */}
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            image={project1}
            title="Agency Landing Page"
            description="A modern landing page designed for creative agencies with strong hierarchy and conversion-focused layout."
          />
          <ProjectCard
            image={project2}
            title="Contact Dashboard"
            description="An intuitive dashboard for managing contacts with clarity and efficiency."
          />
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            image={project3}
            title="Vapeshop Landing Page"
            description="Bold landing page focused on branding and product highlights."
          />
          <ProjectCard
            image={project4}
            title="Furniture Landing Page"
            description="Minimal furniture website showcasing products elegantly."
          />
          <ProjectCard
            image={project5}
            title="Turf Easy UX Case Study"
            description="UX case study covering research, wireframes, and usability."
          />
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Link to='/Project'>
          <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300">
            See More
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomeProject;

/* Card component */
const ProjectCard = ({ image, title, description }) => {
  return (
    <div
      className="
        group
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-[0_0_30px_rgba(168,85,247,0.15)]
        hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            group-hover:scale-105
            transition-transform duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
