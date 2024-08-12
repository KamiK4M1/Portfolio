import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaTimes } from 'react-icons/fa';

interface Certificate {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'AI Engineering Certificate',
    image: './cert/SuperAI_Theory_LV1.png',
    description: 'Completed a comprehensive course on AI engineering.',
    date: 'June 2023',
  },
  {
    id: 2,
    title: 'Web Development Certificate',
    image: '/path-to-your-certificate-image-2.jpg',
    description: 'Gained in-depth knowledge in modern web development technologies.',
    date: 'August 2023',
  },
  // Add more certificates as needed
];

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-5xl font-bold mb-12"
        >
          <FaCertificate className="inline-block mr-3 text-yellow-400" />
          Certificates
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-yellow-400 cursor-pointer"
              onClick={() => setSelectedCert(certificate)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">View Certificate</span>
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">{certificate.title}</h3>
              <p className="text-gray-400 mb-3">{certificate.description}</p>
              <p className="text-yellow-400 text-sm font-semibold">{certificate.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-gray-800 rounded-lg overflow-hidden relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white z-10"
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-auto h-auto max-w-full max-h-[calc(100vh-8rem)] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 p-4">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-gray-300 mb-2">{selectedCert.description}</p>
                <p className="text-yellow-400 text-sm font-semibold">{selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;