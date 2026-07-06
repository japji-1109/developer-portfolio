import hero from "../assets/hero.png";
import { GraduationCap, BriefcaseBusiness, FolderKanban } from "lucide-react";
import CV from '../assets/CV.pdf';

const About = ({ darkMode }) => {
    return (
        <section
            id="about"
            className={`min-h-screen flex items-center justify-center px-6 py-20  }`}>
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side */}
                <figure
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="flex justify-center relative order-2 lg:order-1 mt-12 lg:mt-0"
                >
                    <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]">

                        {/* Star */}
                        <div
                            className="absolute inset-0
              bg-gradient-to-l
              from-[#f91316]
              via-[#fb923c]
              to-[#f59e0b]
              rotate-12
              star-shape
              z-0"
                        ></div>

                        {/* Hero Image */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                                src={hero}
                                alt="About"
                                className="w-[72%] object-contain -translate-y-10"
                            />
                        </div>

                    </div>
                </figure>

                {/* Right Side */}
                <article
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className="text-center lg:text-left order-1 lg:order-2"
                >
                    <h2
                        className="text-4xl lg:text-6xl font-bold mb-6
            text-transparent bg-gradient-to-r
            from-orange-400 to-orange-600 bg-clip-text"
                    >
                        About Me
                    </h2>

                    <p
                        className={`text-lg leading-9 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        data-aos='fade-up'
                        data-aos-delay='500'
                    >
                        Hi, I'm Japji Kaur, a Computer Science Engineering student with a passion for developing clean, 
                        responsive, and user-friendly web applications. I specialize in React.js, JavaScript, HTML, CSS, Tailwind CSS, 
                        Node.js, and C++, and I'm continuously expanding my knowledge in Artificial Intelligence and Cybersecurity. 
                        I enjoy solving real-world problems through code, building meaningful projects, and learning new technologies 
                        that help me grow as a developer. I'm currently seeking opportunities to gain practical experience, collaborate 
                        on innovative projects, and contribute to impactful software solutions.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">

  {/* Education */}
  <div
    className="text-center"
    data-aos="zoom-in"
    data-aos-delay="600"
  >
    <GraduationCap className="w-12 h-12 mx-auto text-orange-400 mb-4" />

    <h3
      className={`text-xl font-semibold mb-2 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Education
    </h3>

    <p
      className={`text-sm leading-6 ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      First-year B.Tech Computer Science student passionate about AI,
      Cybersecurity and Web Development.
    </p>
  </div>

  {/* Experience */}
  <div
    className="text-center"
    data-aos="zoom-in"
    data-aos-delay="700"
  >
    <BriefcaseBusiness className="w-12 h-12 mx-auto text-orange-400 mb-4" />

    <h3
      className={`text-xl font-semibold mb-2 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Experience
    </h3>

    <p
      className={`text-sm leading-6 ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      Fresher with hands-on experience building React, JavaScript and
      full-stack development projects.
    </p>
  </div>

  {/* Projects */}
  <div
    className="text-center"
    data-aos="zoom-in"
    data-aos-delay="800"
  >
    <FolderKanban className="w-12 h-12 mx-auto text-orange-400 mb-4" />

    <h3
      className={`text-xl font-semibold mb-2 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Projects
    </h3>

    <p
      className={`text-sm leading-6 ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      Built 10+ academic and personal projects using React, Node.js,
      Flutter, Python and C++.
    </p>
  </div>

</div>
                    </div>
                    <a
  href={CV}
  download
  className={`w-full sm:w-auto inline-flex items-center justify-center
  border-2 border-orange-500 py-2 px-6
  rounded-full font-semibold transition-all duration-300
  hover:shadow-[0_0_35px_rgba(255,165,0,0.6)]
  ${
    darkMode
      ? "text-white bg-orange-500/10"
      : "text-gray-800 bg-white"
  }`}
  data-aos="fade-up"
  data-aos-delay="600"
>
  Learn More
</a>
                </article>
            </div>
        </section>
    );
};

export default About;
