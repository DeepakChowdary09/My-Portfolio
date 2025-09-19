import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Hero = ({ darkMode }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "Full-Stack Developer",
    "React Expert",
    "UI/UX Designer",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
          : "bg-gradient-honeydew-argentinian"
      }`}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-grid-white/[0.05]" : "bg-grid-black/[0.05]"
          } bg-[size:20px_20px]`}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode
                ? "from-blue-400 via-purple-500 to-pink-500"
                : "from-blue-600 via-purple-600 to-pink-600"
            }`}
          >
            Deepak Nekkanti
          </h1>

          <div className="text-2xl md:text-3xl mb-8">
            <span className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              I&apos;m a{" "}
            </span>
            <span
              className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-blue-400 to-purple-500"
                  : "from-blue-600 to-purple-600"
              }`}
            >
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              }`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? "border-gray-400 text-gray-300 hover:bg-gray-800 hover:border-gray-300"
                  : "border-gray-600 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            {[
              {
                name: "GitHub",
                icon: "🐙",
                url: "https://github.com/DeepakChowdary09",
              },
              {
                name: "LinkedIn",
                icon: "💼",
                url: "https://www.linkedin.com/in/deepaknekkanti",
              },
              {
                name: "Twitter",
                icon: "🐦",
                url: "https://x.com/DeepaK_09N?s=09",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl hover:scale-110 transition-transform duration-300 ${
                  darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                }`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Hero;
