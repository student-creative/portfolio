import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../img/profile.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen flex items-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-10 md:gap-0 w-full">
        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left space-y-6 md:w-1/2" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-teal-400">Aryan 👋</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300">
            <Typewriter
              words={['Frontend Developer', 'React Enthusiast', 'UI Designer']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-gray-400">
            I craft modern, responsive websites using clean code, design focus, and powerful tools like React & Tailwind.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition duration-300 shadow-md"
            >
              Hire Me
            </a>
          <a
  href="/resume.pdf"
  download
  className="border border-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700 transition shadow-md"
>
  Download Resume
</a>

          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end pr-16" data-aos="fade-left">
          <img
            src={profileImg}
            alt="Aryan"
            className="w-64 h-64 rounded-full border-4 border-teal-400 object-cover  hover:scale-105 transition duration-500 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
