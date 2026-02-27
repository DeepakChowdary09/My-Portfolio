import { motion } from "framer-motion";
import PropTypes from "prop-types";

const projects = [
  {
    title: "AI-Powered Todo Application",
    description:
      "Modern React app with AI-driven task suggestions and a chatbot for insights. Features real-time task management, Pomodoro timer, and a responsive Tailwind UI. Secure backend with PostgreSQL + Prisma ORM.",
    link: "https://crafted-path-qg6h-qqro4q06f-deepakchowdary09s-projects.vercel.app",
  },
  {
    title: "AnndataKart",
    description:
      "Agriculture-themed e-commerce platform built with the MERN stack. Real-time cart updates, responsive design, and smooth checkout. Farmers + buyers connected with modern UX.",
    link: "https://anndatakart.vercel.app",
  },
  {
    title: "CraftedPath",
    description:
      "AI-assisted Job Tracker built with Next.js. Tracks applications, generates tailored resumes + cover letters, and helps users prep for interviews with smart insights.",
    link: "#",
  },
  {
    title: "SaveFood_Simulation",
    description:
      "Real-time logistics simulator built with Next.js and Go. Orchestrates autonomous food rescue dispatch, visualizes live fleet telemetry, and monitors system latency.",
    link: "https://savefood-deepak.vercel.app",
  },
];

const Portfolio = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#111827] text-white"
          : "bg-gradient-to-r from-[#F9FAFB] via-[#F3F4F6] to-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
        <h2
          className={`text-5xl font-bold tracking-tight mb-16 text-center font-['Montserrat'] ${
            darkMode ? "text-white" : "text-[#111827]"
          }`}
        >
          🚀 My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`group p-8 rounded-2xl shadow-lg border transition-all duration-500 ease-in-out flex flex-col justify-between ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Title */}
              <h3
                className={`text-2xl font-semibold mb-4 font-['Montserrat'] ${
                  darkMode ? "text-[#FF6B6B]" : "text-[#FF6B6B]"
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`flex-grow mb-6 leading-relaxed font-['Inter'] ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.description}
              </p>

              {/* Button */}
              <div className="text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`relative inline-block font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md ${
                      darkMode
                        ? "bg-[#FF6B6B] text-white hover:shadow-[#FF6B6B]/50"
                        : "bg-[#FF6B6B] text-white hover:shadow-[#FF6B6B]/70"
                    }`}
                  >
                    View Project
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Portfolio;
