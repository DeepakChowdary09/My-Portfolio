import React, { useEffect, useState } from 'react';

const Header = ({ darkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-r from-teal-300 via-purple-300 to-blue-200 text-gray-900'
      } ${scrolled ? 'shadow-xl backdrop-blur-md bg-opacity-90' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Welcome to My Portfolio
        </h1>

        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-6 text-lg">
            {['About', 'Services', 'Projects', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:text-white transition duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
