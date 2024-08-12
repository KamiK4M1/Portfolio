import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Cert', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          My Portfolio
        </motion.h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-white text-2xl mb-6 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}