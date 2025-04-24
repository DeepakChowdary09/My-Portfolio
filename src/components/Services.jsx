import React from 'react';

const Services = ({ darkMode }) => {
  const services = [
    { title: 'Full-Stack Web Development', description: 'Building dynamic, responsive websites using React, Node.js, and MongoDB to create seamless user experiences.', icon: '💻' },
    { title: 'Mobile App Development', description: 'Creating cross-platform mobile applications using React Native, ensuring smooth performance on both iOS and Android.', icon: '📱' },
    { title: 'API Integration', description: 'Integrating third-party APIs and developing custom APIs to enhance functionality and provide robust data management.', icon: '🔗' },
  ];

  return (
    <section 
      id="services"   
      className={`py-12 transition-colors duration-500 ${
        darkMode 
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-r from-violet-300 via-purple-200 to-pink-400'
      }`}
    >
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white'
                  : 'bg-gradient-to-r from-purple-200 to-blue-300 text-white'
              }`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className={`text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-gray-400 to-gray-600' : 'from-blue-600 to-purple-600'}`}>
                {service.title}
              </h2>

              <p className="mb-4">{service.description}</p>
              <a
                href="#"
                className={`hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-200'}`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
