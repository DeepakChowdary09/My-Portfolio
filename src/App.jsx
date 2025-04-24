import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen relative" style={{ cursor: 'none' }}> {/* Hide default cursor */}
      <Header darkMode={darkMode} />

      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="bg-transparent border-none p-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} className="text-white text-2xl" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-black text-2xl" />
          )}
        </button>
      </div>

      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      {/* Custom Cursor Glow - Commented Out */}
      {/*
      <div
        className="cursor-light"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      */}
    </div>
  );
};

export default App;
