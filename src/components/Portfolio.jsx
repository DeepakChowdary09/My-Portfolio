import React from 'react';

const projects = [
  { title: 'Project 1', description: 'A cool project using React. It showcases a dynamic user interface and responsive design.', link: '#' },
  { title: 'Project 2', description: 'An API integration project that connects to various services, demonstrating real-time data fetching.', link: '#' },
  { title: 'Project 3', description: 'A fully responsive website built with modern technologies, optimized for all devices.', link: '#' },
];

const Portfolio = ({ darkMode }) => {
  return (
    <section 
      id="projects" 
      className={`py-12 transition-colors duration-500 ${
        darkMode 
          ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-violet-300 via-purple-200 to-pink-400'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r transition-colors duration-500 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'from-gray-700 to-gray-800 text-white' 
                  : 'from-blue-200 to-purple-300 text-gray-800'
              }`}
            >
              <h3 className={`text-3xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-600'
              }`}>
                {project.title}
              </h3>

              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="inline-block">
                <button className={`font-semibold py-2 px-4 rounded transition duration-300 ${
                  darkMode ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-300 text-gray-200 hover:bg-blue-400'
                }`}>
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
