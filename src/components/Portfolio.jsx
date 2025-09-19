import PropTypes from "prop-types";

const projects = [
  {
    title: "AI-Powered Todo Application",
    description:
      "AI-Powered Todo Application is a modern React app with AI-driven task suggestions and a chatbot for insights. It features real-time task management, a Pomodoro timer, and a responsive UI built with Tailwind CSS. Powered by PostgreSQL and Prisma ORM with secure authentication, it helps users stay organized and productive.",
    link: "https://crafted-path-qg6h-qqro4q06f-deepakchowdary09s-projects.vercel.app", // <-- Replace with your project link
  },
  {
    title: "AnndataKart",
    description:
      "AnndataKart is an agriculture-themed e-commerce platform built with the MERN stack. Users can browse products, add to cart, and complete purchases in real-time. Features include responsive UI, interactive cart updates, and backend integration for a seamless shopping experience.",
    link: "https://anndatakart.vercel.app", // <-- Replace with your project link
  },
  {
    title: "CraftedPath",
    description:
      "CraftedPath is an AI-assisted Job Tracker and preparation platform built with Next.js. It helps users track applications, create tailored resumes, generate cover letters, and prepare for interviews efficiently. Modern UI, intelligent insights, and structured workflow make job hunting smarter and faster.",
    link: "#", // <-- Replace with your project link
  },
];

const Portfolio = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-16 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#870057] to-[#A5303F]"
          : "bg-gradient-to-br from-[#870057] via-[#A5303F] to-[#870057]"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 rounded-xl"></div>
              <h3
                className={`text-3xl font-semibold mb-4 relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${
                  darkMode
                    ? "from-blue-400 to-purple-500"
                    : "from-blue-600 to-purple-600"
                }`}
              >
                {project.title}
              </h3>

              <p className="mb-4 relative z-10">{project.description}</p>
              <a href={project.link} className="relative z-10 inline-block">
                <button
                  className={`font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 ${
                    darkMode
                      ? "bg-blue-500 text-white hover:bg-blue-400"
                      : "bg-blue-300 text-gray-900 hover:bg-blue-400"
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
