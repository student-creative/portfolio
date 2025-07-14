import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 hover:text-teal-400 transition">Contact Me</h2>

      <form
        className="max-w-xl mx-auto flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-gray-800 rounded text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 bg-gray-800 rounded text-white"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 bg-gray-800 rounded text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded transition"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </section>
  );
}

export default Contact;
