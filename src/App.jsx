import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark-mode", savedTheme === "dark");
    } else {
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen relative">
      <Header darkMode={darkMode} />

      {/* ✅ Single Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-gray-800 shadow-lg hover:bg-gray-100"
          }`}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} className="text-xl" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-xl" />
          )}
        </button>
      </div>

      {/* Sections */}
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      {/* Toasts */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
