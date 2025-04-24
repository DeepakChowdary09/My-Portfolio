import React, { useState } from 'react';

const About = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section
      id="about"
      className={`about ${
        darkMode
          ? 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800' // Dark mode gradient
          : 'bg-gradient-to-r from-teal-400 via-purple-300 to-blue-200' // Light mode gradient
      } text-white py-12 transition-colors duration-500`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          🚀 Full Stack Engineer | Passionate about crafting seamless web experiences and building scalable applications.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          {['skills', 'experience', 'education'].map((tab) => (
            <p
              key={tab}
              className={`cursor-pointer pb-2 transition duration-300 ease-in-out transform ${
                activeTab === tab ? 'border-b-2 border-white scale-105' : 'border-transparent'
              } hover:border-white hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}
              onClick={() => openTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </p>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'skills' && (
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <ul className="space-y-4">
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Web Development
                  </span><br />
                  Designing Websites Using Full Stack technologies including React, Node.js, and MongoDB.
                </li>
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    App Development
                  </span><br />
                  Building Android/iOS apps with React Native.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <ul className="space-y-4">
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    July 2023 - Jan 2024
                  </span><br />
                  Full Stack Intern at Moss Adams India LLP
                </li>
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    March 2021 - Dec 2022
                  </span><br />
                  Web Development Intern at Q-spiders, Bangalore
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <ul className="space-y-4">
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    2023 Passout
                  </span><br />
                  BTech from AIET, Mangalore
                </li>
                <li>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    2021-2022
                  </span><br />
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
