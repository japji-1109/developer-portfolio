import { link } from "framer-motion/client";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Routine Matrix",
      desc: "A productivity web application built with React.",
      link: "https://github.com/japji-1109/routine-manager",
      demo: 'https://routinemanagerr.netlify.app/',
      image: image1,
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      title: "Attendance Tracker",
      desc: "Track attendance efficiently.",
      link: "https://github.com/japji-1109/attendance-tracker",
      demo: 'https://workerattendacetracker.netlify.app/',
      image: image2,
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Weather App",
      desc: "Real-time weather forecasting application.",
      demo: 'https://weatherofciti.netlify.app/',
      image: image3,
      link: "https://github.com/japji-1109/weather-app",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Smart Learning System",
      desc: "AI-powered learning platform.",
      link: "https://github.com/japji-1109/smartlearningsys",
      demo: 'https://smartlearningsys.netlify.app/',
      image: image4,
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "Stock Products",
      desc: "Inventory management system.",
      link: "https://github.com/japji-1109/stock_products",
      demo: '',
      image: image5,
      tags: ["C++", "DSA"],
    },
    {
      id: 6,
      title: "SearchWorks",
      desc: "Text search engine using DSA.",
      link: "https://github.com/japji-1109/searchworks",
      demo: '',
      image: image6,
      tags: ["C++", "DSA"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="font-bold text-4xl mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent works and projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right,#1f2937,#111827)"
                  : "linear-gradient(to bottom right,#ffffff,#f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-4"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode
                          ? "#374151"
                          : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#6b7280",
                      }}
                      className="px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition"
                    style={{
                      backgroundColor: darkMode
                        ? "#374151"
                        : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-white hover:opacity-90 transition"
                    style={{
                      background:
                        "linear-gradient(to right,#f97316,#f59e0b)",
                    }}
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/japji-1109"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(to right,#f97316,#f59e0b)",
            }}
          >
            <FaGithub />
            View All Projects
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;