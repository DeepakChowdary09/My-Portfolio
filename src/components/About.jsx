import PropTypes from "prop-types";
import { useState } from "react";

const About = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section
      id="about"
      className={`scroll-mt-32 py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#111827]"
          : "bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-white"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1
          className={`text-5xl md:text-6xl font-bold text-center mb-8 font-['Montserrat'] ${
            darkMode
              ? "text-white"
              : "bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]"
          }`}
        >
          About Me
        </h1>

        {/* Subtitle */}
        <p
          className={`mb-12 text-lg md:text-xl text-center max-w-2xl mx-auto font-['Inter'] ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
           Full Stack Engineer | Passionate about crafting seamless web
          experiences and building scalable applications.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          {["skills", "experience", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => openTab(tab)}
              className={`relative pb-2 font-semibold text-xl font-['Inter'] transition-all ${
                activeTab === tab
                  ? "text-[#FF6B6B] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#FF6B6B] after:rounded-full"
                  : darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "skills" && (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <ul className="space-y-6 text-lg font-['Inter']">
                <li>
                  <span className="font-bold text-[#FF6B6B]">
                    Web Development
                  </span>
                  <br /> Designing websites using React, Node.js, and MongoDB.
                </li>
                <li>
                  <span className="font-bold text-[#FF6B6B]">
                    App Development
                  </span>
                  <br /> Building Android/iOS apps with React Native.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <ul className="space-y-6 text-lg font-['Inter']">
                <li>
                  <span className="font-bold text-[#FF6B6B]">
                    July 2023 - Jan 2024
                  </span>
                  <br /> Full Stack Intern at Moss Adams India LLP
                </li>
                <li>
                  <span className="font-bold text-[#FF6B6B]">
                    March 2021 - Dec 2022
                  </span>
                  <br /> Web Development Intern at Q-spiders, Bangalore
                </li>
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <ul className="space-y-6 text-lg font-['Inter']">
                <li>
                  <span className="font-bold text-[#FF6B6B]">2023 Passout</span>
                  <br /> BTech from AIET, Mangalore
                </li>
                <li>
                  <span className="font-bold text-[#FF6B6B]">2021-2022</span>
                  <br /> Web Development training at Q-spiders, Bangalore
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
