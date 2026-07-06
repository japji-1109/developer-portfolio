import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
    document.documentElement.classList.add("dark");
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newNode = !darkMode;
    setDarkMode(newNode);
    document.documentElement.classList.add("dark");
  }

  return (
    <div className={darkMode ? 
    'bg-linear-to-br from gray-900 via-[#0d182e] to-gray-900 min-h-screen' : 
    'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}></Hero>
      <About darkMode={darkMode}></About>
      <Skills darkMode={darkMode}></Skills>
      <Projects darkMode = {darkMode}></Projects>
      <Contact darkMode = {darkMode}></Contact>
      <Footer darkMode={darkMode}></Footer>
    </div>
  )
}

export default App;