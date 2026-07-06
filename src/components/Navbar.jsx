import React, { useState } from "react";
import { color, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    const lightColors = {
        navBg: "bg-gradient-to-br from-orange-200 to-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-800",
        textActive: "text-orange-600",
        textHover: "text-orange-500",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
    };

    const darkColors = {
        navBg: "bg-gradient-to-br from-gray-700 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textActive: "text-orange-400",
        textHover: "text-orange-400",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-500",
    };

    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setMenuOpen(false);
    };

    return (
        <div className="flex justify-center w-full fixed top-4 z-50">
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex justify-between items-center w-[90%] lg:w-[80%] ${colors.navBg} backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg`}
            >
                {/* Logo */}
                <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                >
                    <span className={`text-xl font-bold ${colors.textPrimary}`}>
                        Portfolio<span className="text-orange-500">.</span>
                    </span>
                </motion.a>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={() => handleNavClick(item.name)}
                            className="relative"
                        >
                            <motion.span
                                className={`font-medium transition-colors duration-300 ${activeSection === item.name.toLowerCase()
                                    ? colors.textActive
                                    : `${colors.textSecondary} hover:text-orange-500`
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>{item.name}
                            </motion.span>
                            {activeSection === item.name.toLowerCase() && (
                                <motion.div layoutId="navbar-indicator"
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full 
                ${colors.indicator}`}>

                                </motion.div>)}
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
                        {darkMode ? (<Sun className="w-5 h-5 text-yellow-300"></Sun>) :
                            (<Moon className="w-5 h-5 text-gray-700f"></Moon>)}
                    </motion.button>
                    <motion.a href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r 
                        ${colors.button} text-white shadow-md hover:shadow-lg transiton-shadow`}>
                        Hire Me
                    </motion.a>
                    {/* Mobile View */}
                    <div className="flex lg:hidden items-center space-x-4 px-2">
                        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            {isMenuOpen ?
                                (<X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`}></X>

                                ) : (<Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`}></Menu>)}
                        </motion.button>
                    </div>
                </div>
                {isMenuOpen && (<motion.div initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-full left-0 right-0 mt-2 lg:hidden 
                        ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-xl shadow-lg border 
                    ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} >
                    <div className="px-4 py-3 space-y-2">
                        {navItems.map((item) => (
                            <a key={item.name}
                                href={item.link}
                                onClick={() => handleNavClick(item.name)}
                                className="block">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className={`py-3 px-4 rounded-lg text-center ${activeSection === item.name.toLowerCase() ? darkMode ? 'bg-gray-800' : 'bg-gray-50' : ''}`}>
                                    <span className={`font-medium ${activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary}`}>
                                        {item.name}
                                    </span>

                                </motion.div>
                            </a>
                        ))}
                        <motion.a href="#contact" onClick={() => setMenuOpen(false)} whileTap={{ scale: 0.95 }} className={`block py-3 px-4 text-centerfont-semibold rounded-lg bg-linear-to-r ${colors.button} `}>Hire Me</motion.a>
                    </div>
                </motion.div>)}
            </motion.nav>
        </div>
    );
};

export default Navbar;