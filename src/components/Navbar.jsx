import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center h-16">
        <h1 className="text-xl sm:text-2xl font-bold text-teal-400">Aryan.dev</h1>
        <div className="hidden sm:flex gap-6 text-sm">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-300 hover:text-teal-400 transition duration-300 capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;