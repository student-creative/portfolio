import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white text-3xl" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0f172a] text-white">
      <h2 className="text-4xl font-bold mb-12 text-center hover:text-teal-400 transition duration-300">
        🚀 My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#1e293b] p-4 rounded-xl shadow-md hover:bg-teal-600 hover:scale-105 transition duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center">{skill.icon}</div>
            <span className="text-lg font-semibold tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
