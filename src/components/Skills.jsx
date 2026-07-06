import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import vite from '../assets/vite.png'
import framer_motion from '../assets/framer_motion.png'
import python from '../assets/python.png'
import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import firebase from '../assets/firebase.png'

const Skills = ({ darkMode }) => {

    const skills = [
        { name: 'react', icon: react, level: 85, color: 'from-cyan-500 to-blue-500' },
        { name: 'tailwind', icon: tailwind, level: 75, color: 'from-teal-500 to-cyan-500' },
        { name: 'vite', icon: vite, level: 60, color: 'from-pink-500 to-fuchsia-500' },
        { name: 'framer_motion', icon: framer_motion, level: 65, color: 'from-blue-500 to-cyan-500' },
        { name: 'python', icon: python, level: 75, color: 'from-blue-500 to-indigo-500' },
        { name: 'javascript', icon: javascript, level: 79, color: 'from-yellow-500 to-amber-500' },
        { name: 'html', icon: html, level: 96, color: 'from-cyan-500 to-blue-500' },
        { name: 'firebase', icon: firebase, level: 70, color: 'from-green-500 to-emerald-500' }
    ]
    return (
        <section id='skills'
            style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
            className='py-14 relative overflow-hidden'>
            <div className='max-w-7xl mx-auto px-6 lg:px-10 py-14 relative overflow-hidden'>
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12">

                    <h1 className="text-5xl font-bold lg:w-1/3" style={{color: darkMode ? "white" : "#1f2937",}}>
                        My <span className="text-orange-500">Skills</span>
                    </h1>

                    <p className="lg:w-2/3 text-lg leading-8 text-gray-300">
                        I enjoy building modern, responsive, and user-friendly web applications
                        using technologies like React, JavaScript, Tailwind CSS, Firebase, and
                        Python. I'm always learning new tools and creating projects that strengthen
                        my skills as a full-stack developer.
                    </p>

                </div>
                <div className='flex flex-wrap -m-4' data-aos='fade-up' data-aos-delay='200'>
                    {skills.map((skill, index) => (
                        <div className='p-4 lg:w-1/4 md:w-1/2 w-full' key={index} data-aos='fade-up' data-aos-delay={`${300 + index * 100}`}>
                            <div style=
                                {{
                                    background: darkMode ?
                                        'linear-gradient(to bottom right, #1f2937, #111827)' :
                                        'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                                    borderColor: darkMode ? '#374151' : '#e5e7eb'
                                }}
                                className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all
                                duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]'>
                                <div className='flex items-center mb-6'>
                                    <div style=
                                        {{
                                            background: darkMode ?
                                                'linear-gradient(to bottom right, #374151, #1f2937)' :
                                                'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                                        }}
                                        className='w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110
                                transition-transform duration-300'>
                                        <img src={skill.icon} alt={skill.name} className='w-full h-full object-contain'></img>

                                    </div>
                                    <h3 className='font-bold text-xl ml-4'
                                        style={{ color: darkMode ? 'white' : '#1f2937' }}>{skill.name}</h3>
                                </div>
                                <div className='mb-2 flex justify-between items-center'>
                                    <span className='font-medium' style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                        Proficiency
                                    </span>
                                    <span style={{
                                        background: ' linear-gradient(to right, #f97316, #f59e0b)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }} className='font-bold'>{skill.level}%</span>
                                </div>
                                <div className='w-full rounded-full h-3 overflow-hidden'
                                    style={{ background: darkMode ? '#374151' : '#e5e7eb' }}>
                                    <div className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}>
                                    </div>
                                    <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                        <div className='h-1 rounded-full opacity-70 group-hover:w-full 
                                        transition-all duration-500 w-1/3'
                                            style={{ background: 'linear-gradient(to right, #f97316, #f59e0b' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>


        </section>
    )
}

export default Skills