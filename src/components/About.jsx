import { useState } from 'react';
import PropTypes from 'prop-types';

const About = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section
      id="about"
      className={`mt-6 scroll-mt-32 about ${
        darkMode
          ? 'bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]'
          : 'bg-gradient-to-br from-[#4b6cb7] to-[#182848]'
      } text-white py-16 transition-colors duration-500`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-10 tracking-tight text-white">
          About Me
        </h1>

        <p className="mb-12 text-lg leading-relaxed text-center max-w-2xl mx-auto text-white/90">
          🚀 Full Stack Engineer | Passionate about crafting seamless web experiences and building scalable applications.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {['skills', 'experience', 'education'].map((tab) => (
            <p
              key={tab}
              className={`cursor-pointer pb-2 transition-all ease-in-out transform font-semibold text-xl bg-clip-text text-transparent 
              bg-gradient-to-r from-[#00c6ff] to-[#0072ff] 
              ${activeTab === tab ? 'border-b-4 border-white scale-105' : 'border-b-2 border-transparent text-white/60'} 
              hover:scale-110 hover:text-white`}
              onClick={() => openTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </p>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'skills' && (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <ul className="space-y-6 text-lg">
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                    Web Development
                  </span>
                  <br />
                  Designing websites using full stack technologies including React, Node.js, and MongoDB.
                </li>
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                    App Development
                  </span>
                  <br />
                  Building Android/iOS apps with React Native.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <ul className="space-y-6 text-lg">
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                    July 2023 - Jan 2024
                  </span>
                  <br />
                  Full Stack Intern at Moss Adams India LLP
                </li>
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                    March 2021 - Dec 2022
                  </span>
                  <br />
                  Web Development Intern at Q-spiders, Bangalore
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <ul className="space-y-6 text-lg">
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                    2023 Passout
                  </span>
                  <br />
                  BTech from AIET, Mangalore
                </li>
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6ff] to-[#0072ff]">
                    2021-2022
                  </span>
                  <br />
                  Web Development training at Q-spiders, Bangalore
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
