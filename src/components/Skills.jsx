import React from 'react';

// Font Awesome Icons
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

// Simple Icons
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';





const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: 'Redux Toolkit', icon: <FaReact className="text-purple-400 text-4xl" /> }, // same icon
  { name: 'Bootstrap', icon: <SiBootstrap className="text-indigo-400 text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: 'REST APIs (Axios)', icon: <FaJs className="text-green-400 text-4xl" /> },

  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white text-4xl" /> },
 
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold inline-block ">
           My Skills
        </h2>
        <p className="text-gray-400 mt-4">Technologies I work with regularly</p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        data-aos="zoom-in"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-xl shadow-lg hover:bg-teal-600 hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center">{skill.icon}</div>
            <span className="text-lg font-semibold tracking-wide group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
