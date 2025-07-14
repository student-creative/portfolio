import React from 'react';

function About(){
  return (
    <section id="about" className="py-24 px-6 text-center bg-[#1e293b]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 hover:text-teal-400 transition">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed hover:scale-105 transition duration-300">
          I'm <span className="text-teal-400 font-semibold">Aryan Sutariya</span>, a dedicated frontend developer from India 🇮🇳.
          I specialize in building modern, responsive websites using React.js, TailwindCSS, HTML, CSS, and JavaScript. <br /><br />
          I love clean UI, fast performance, and solving real problems through code. I'm a fresher, but I'm committed, passionate,
          and always ready to take challenges that push me to learn and grow.
        </p>
      </div>
    </section>
  );
};

export default About;
