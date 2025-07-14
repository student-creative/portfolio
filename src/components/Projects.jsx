import React from 'react';
import hospitalImg from '../img/hospital.jpg';
import coffe from '../img/coffe.jpg';
import ai from '../img/ai.jpg';
import skincare from '../img/skincare.jpg';
import wheather from '../img/wheather.jpg';
const projects = [
{
  title: "Hospital Management System",
  desc: (
    <>
      A fully responsive and feature-rich hospital management platform built with{" "}
      <span className="font-semibold text-blue-700">ReactJS</span> and{" "}
      <span className="font-semibold text-green-700">Tailwind CSS</span>. This project includes a secure{" "}
      <span className="font-semibold text-purple-700">Admin Panel</span> for managing doctors, departments,
      appointments, and contact messages. The interface is enhanced with{" "}
      <span className="font-semibold text-pink-600">AOS animations</span>, real-time form handling via{" "}
      <span className="font-semibold text-yellow-600">EmailJS</span>, toast notifications, and route-based navigation.
      <br />
      <span className="text-red-600 font-semibold mt-2 block">
        🔐 Admin Login — Email: admin@gmail.com | Password: admin123
      </span>
      <a
        href="https://hospital-managementwebp.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-600 underline font-medium hover:text-blue-800"
      >
        🔗 Live Demo
      </a>
    </>
  ),
  img: hospitalImg,
},



{
  title: "Coffee Website with Admin Panel",
  desc: (
    <>
      A stylish and fully responsive coffee brand website built with{" "}
      <span className="text-blue-700 font-semibold">ReactJS</span> and{" "}
      <span className="text-green-700 font-semibold">Tailwind CSS</span>. It features a modern{" "}
      <span className="text-purple-700 font-semibold">Admin Panel</span> to manage products, categories, and customer messages.
      Enhanced with smooth UI animations, toast notifications, and clean routing for a seamless user experience.
      <br />
      <span className="text-red-600 font-semibold mt-1 block">
        🔐 Admin Login – Email: admin@gmail.com | Password: admin123
      </span>
      <a
        href="https://coffeprojectweb.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-amber-700 underline font-medium hover:text-amber-900"
      >
        ☕ Live Demo
      </a>
    </>
  ),
  img: coffe,
},


 {
  title: "BharatGPT – AI Sarvam Assistant",
  desc: (
    <>
      A modern AI-powered Sarvam assistant named{" "}
      <span className="text-indigo-700 font-semibold">BharatGPT</span>, built using{" "}
      <span className="text-blue-700 font-semibold">ReactJS</span> and{" "}
      <span className="text-green-700 font-semibold">Tailwind CSS</span>. It connects to an AI API to provide
      intelligent skincare recommendations and answers user queries. Includes a sleek, responsive interface with smooth
      animations and a clean layout.
      <br />
      <a
        href="https://bharatgptapp.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-indigo-600 underline font-medium hover:text-indigo-800"
      >
        🤖 Live Demo
      </a>
    </>
  ),
  img: ai,
},

{
  title: "Skincare Website",
  desc: (
    <>
      A clean and responsive skincare landing page designed with a{" "}
      <span className="text-green-700 font-semibold">fresh layout</span> and{" "}
      <span className="text-blue-700 font-semibold">Tailwind CSS</span>. Focused on modern design principles,
      smooth sections, and mobile-first responsiveness. Ideal for showcasing skincare brands with style.
      <br />
      <a
        href="https://skincareap.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-pink-600 underline font-medium hover:text-pink-800"
      >
        💄 Live Demo
      </a>
    </>
  ),
  img: skincare,
},

 {
  title: "Live Weather App",
  desc: (
    <>
      A fully responsive weather forecasting app built with{" "}
      <span className="text-blue-700 font-semibold">ReactJS</span> and{" "}
      <span className="text-green-700 font-semibold">Tailwind CSS</span>, using live weather data from{" "}
      <span className="text-yellow-600 font-semibold">WeatherStack API</span>. It displays real-time temperature,
      condition icons, city search, and a smooth animated UI for a clean user experience.
      <br />
      <a
        href="https://weatherliveap.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-600 underline font-medium hover:text-blue-800"
      >
        ☁️ Live Demo
      </a>
    </>
  ),
  img: wheather,
},

];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#1e293b] text-center">
      <h2 className="text-4xl font-bold mb-10 hover:text-teal-400 transition">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#0f172a] rounded overflow-hidden shadow-lg hover:shadow-teal-500/50 transition hover:scale-105"
          >
            <img src={proj.img} alt={proj.title} className="w-full h-80 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-400">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
