
import PropTypes from 'prop-types';

const projects = [
  { title: 'Project 1', description: 'A cool project using React. It showcases a dynamic user interface and responsive design.', link: '#' },
  { title: 'Project 2', description: 'An API integration project that connects to various services, demonstrating real-time data fetching.', link: '#' },
  { title: 'Project 3', description: 'A fully responsive website built with modern technologies, optimized for all devices.', link: '#' },
];

const Portfolio = ({ darkMode }) => {
  return (
    <section 
      id="projects" 
      className={`py-16 transition-colors duration-500 ${
        darkMode 
          ? 'bg-gradient-to-r from-purple-700 via-blue-800 to-black' 
          : 'bg-gradient-to-r from-pink-300 via-teal-400 to-blue-300'
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-5xl font-bold mb-12 text-center text-white ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 rounded-xl"></div>
              <h3 className={`text-3xl font-semibold mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-purple-600'
              }`}>
                {project.title}
              </h3>

              <p className="mb-4 relative z-10">{project.description}</p>
              <a href={project.link} className="relative z-10 inline-block">
                <button 
                  className={`font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 ${
                    darkMode 
                      ? 'bg-blue-500 text-white hover:bg-blue-400' 
                      : 'bg-blue-300 text-gray-900 hover:bg-blue-400'
                  }`}
                >
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

Portfolio.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
