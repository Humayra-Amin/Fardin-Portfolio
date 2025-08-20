import React from "react";
import { FaLaptopCode, FaMobileAlt, FaChartBar, FaRocket, FaShoppingCart, FaDraftingCompass } from "react-icons/fa";

const services = [
  {
    title: "Website Design",
    description: "Crafting responsive, modern, and visually appealing websites that reflect your brand identity.",
    icon: <FaLaptopCode className="text-4xl text-primary mb-4" />
  },
  {
    title: "Apps Design",
    description: "Designing intuitive and engaging mobile applications for Android and iOS with smooth UX/UI.",
    icon: <FaMobileAlt className="text-4xl text-primary mb-4" />
  },
  {
    title: "Dashboard Design",
    description: "Creating interactive and user-friendly dashboards for analytics and reporting purposes.",
    icon: <FaChartBar className="text-4xl text-primary mb-4" />
  },
  {
    title: "Landing Page Design",
    description: "Building high-converting landing pages optimized for user engagement and lead generation.",
    icon: <FaRocket className="text-4xl text-primary mb-4" />
  },
  {
    title: "E-commerce Design",
    description: "Designing online stores with seamless shopping experiences to boost sales and retention.",
    icon: <FaShoppingCart className="text-4xl text-primary mb-4" />
  },
  {
    title: "Wireframe & Prototype",
    description: "Developing wireframes and interactive prototypes to visualize and test your product ideas.",
    icon: <FaDraftingCompass className="text-4xl text-primary mb-4" />
  }
];

const Service = () => {
  return (
    <div className="bg-[#251C31] py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12 federant">Services I Provide</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-purple-500 border-2 border-[#c1a7e4] rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-3 hover:scale-105 transition-transform duration-300 group"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-950 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
