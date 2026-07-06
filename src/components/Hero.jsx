import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";
import github_white from "../assets/github_white.webp";
import tiktok_white from "../assets/tiktok_white.png";
import CV from "../assets/CV.pdf";
import hero from "../assets/hero.png";
import hi from "../assets/hi.png";

import { DownloadIcon, Mail } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: "Instagram" },
    { icon: youtube, alt: "YouTube" },
    { icon: darkMode ? tiktok_white : tiktok, alt: "TikTok" },
    { icon: darkMode ? github_white : github, alt: "GitHub" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">

      {/* Orange Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[180px]
          ${
            darkMode
              ? "bg-orange-500/25"
              : "bg-orange-400/20"
          }`}
        ></div>
      </div>

      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="relative z-10 pt-32"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between mt-14">

          {/* Left Section */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  data-aos-delay={400 + index * 100}
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? "" : "brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1
              className={`text-5xl lg:text-7xl font-bold mb-4 ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Japji
            </h1>

            {/* Paragraph */}
            <p
              className={`mb-8 leading-relaxed max-w-lg text-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a href={CV} download>
                <button
                  className="inline-flex items-center justify-center
                  bg-gradient-to-r
                  from-orange-500 to-amber-500
                  text-white
                  py-3 px-8
                  rounded-full
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(255,165,0,0.6)]"
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </a>

              <a href="#contact">
                <button
                  className={`inline-flex items-center justify-center
                  ${theme.buttonSecondary}
                  py-3 px-8
                  rounded-full
                  font-semibold
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(255,165,0,0.4)]`}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center mt-10 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 lg:w-full">

              <img
                src={hero}
                alt="Hero"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />

              <img
                src={hi}
                alt="Hi"
                className="absolute top-6 left-8 sm:left-20 w-16 sm:w-20 animate-bounce"
              />

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;