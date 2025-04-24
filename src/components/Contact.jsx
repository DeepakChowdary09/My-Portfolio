import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className={`py-12 transition-colors duration-500 ${
        darkMode 
          ? 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900' 
          : 'bg-gradient-to-r from-blue-300 to-purple-200'
      }`}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Contact Me
        </h2>
        <p className={`text-center mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Feel free to reach out to me using the form below for any inquiries or collaborations.
        </p>

        <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-lg space-y-6 ${darkMode ? 'bg-gray-700' : 'bg-white bg-opacity-10'}`}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className={`block mb-2 text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                darkMode 
                  ? 'border-gray-600 bg-gray-800 text-gray-300 focus:border-blue-500' 
                  : 'border-gray-400 bg-gray-100 text-gray-800 focus:border-blue-500'
              }`}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className={`block mb-2 text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded-lg focus:outline-none ${
                darkMode 
                  ? 'border-gray-600 bg-gray-800 text-gray-300 focus:border-blue-500' 
                  : 'border-gray-400 bg-gray-100 text-gray-800 focus:border-blue-500'
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className={`block mb-2 text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded-lg focus:outline-none h-32 ${
                darkMode 
                  ? 'border-gray-600 bg-gray-800 text-gray-300 focus:border-blue-500' 
                  : 'border-gray-400 bg-gray-100 text-gray-800 focus:border-blue-500'
              }`}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`font-semibold py-2 px-6 rounded-lg shadow transition duration-300 ${
                darkMode 
                  ? 'bg-blue-500 text-white hover:bg-blue-400' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
