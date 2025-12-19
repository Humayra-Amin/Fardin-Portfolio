import React from "react";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#251C31] text-white py-16 px-6">
      {/* Experience Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white federant mb-6 text-center">Experience</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Job 1 */}
          <div className="bg-[#513279] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-semibold">Accounts & Operations Executive</h3>
            <p className="text-blue-500 font-semibold">Madina Furniture</p>
            <div className="flex items-center text-gray-400 text-sm mt-1">
              <FaCalendarAlt className="mr-2" /> Feb 2025 – Present
            </div>
            <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
              <li>Handled daily accounts, sales records, and expense tracking.</li>
              <li>Coordinated with managers for smooth shop operations.</li>
              <li>Managed social media platforms, designing promotional content.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="bg-[#513279] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-semibold">Web Developer Intern</h3>
            <p className="text-blue-500 font-semibold">ASCII System</p>
            <div className="flex items-center text-gray-400 text-sm mt-1">
              <FaCalendarAlt className="mr-2" /> Aug 2023 – Nov 2023
            </div>
            <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
              <li>Collaborated with development team to build websites.</li>
              <li>Designed and maintained website UI/UX.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="bg-[#513279] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 md:col-span-2 mx-auto w-full">
            <h3 className="text-xl font-semibold">Website Design & Product Design</h3>
            <p className="text-blue-500 font-semibold">BitByte</p>
            <div className="flex items-center text-gray-400 text-sm mt-1">
              <FaCalendarAlt className="mr-2" /> Oct 2025 – Present
            </div>
            <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
              <li>Designing and developing responsive websites for clients.</li>
              <li>Creating product designs and user interfaces aligned with UX best practices.</li>
              <li>Collaborating with developers and stakeholders to deliver polished products.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-white federant mb-6 text-center">Education</h2>
        <div className="bg-[#513279] p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center mb-3">
            <FaGraduationCap className="text-blue-500 text-3xl mr-3" />
            <h3 className="text-xl font-semibold">B.Sc. in Computer Science and Engineering</h3>
          </div>
          <p className="text-blue-500 font-semibold">Chittagong Independent University</p>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <FaCalendarAlt className="mr-2" /> 2019 – 2023
          </div>
          <p className="text-gray-300 mt-3">
            Successfully completed a Bachelor of Science in Computer Science and Engineering, 
            building a strong foundation in programming, problem-solving, and modern software technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
