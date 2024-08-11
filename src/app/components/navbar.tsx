import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          My Portfolio
        </motion.h1>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex space-x-6">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Home
          </motion.a>
          <motion.a
            href="#skills"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Skills
          </motion.a>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          <FaTimes />
        </button>
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="text-white text-3xl mb-6"
        >
          Home
        </a>
        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className="text-white text-3xl mb-6"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="text-white text-3xl mb-6"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="text-white text-3xl"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
