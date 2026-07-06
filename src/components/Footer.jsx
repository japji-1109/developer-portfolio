import {
  FaGithub,
  FaInstagram,
  FaHeart,
  FaLinkedin,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
    >
      <div className="container mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold"
              style={{
                color: darkMode ? "white" : "#1f2937",
              }}
            >
              Portfolio
            </h3>

            <p
              className="mt-2 text-lg"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Full Stack Developer
            </p>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://github.com/japji-1109"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: darkMode ? "white" : "#374151",
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center
              transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/japji-kaur-a279a1210"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: darkMode ? "white" : "#374151",
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center
              transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://instagram.com/japji0925"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: darkMode ? "white" : "#374151",
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center
              transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t my-8"
          style={{
            borderColor: darkMode ? "#374151" : "#d1d5db",
          }}
        ></div>

        {/* Bottom Section */}
        <div className="flex justify-center">
          <p
            className="text-sm flex items-center gap-2"
            style={{
              color: darkMode ? "#9ca3af" : "#6b7280",
            }}
          >
            © {currentYear} Made with
            <FaHeart className="text-red-500" />
            by
            <span className="text-orange-500 font-semibold">
              Japji Kaur
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;