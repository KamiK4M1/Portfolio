import { motion } from 'framer-motion';
import SharedBackground from './sharedbackground';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <SharedBackground />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-white text-4xl mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)' }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-white text-2xl">Project 1</h3>
            <p className="text-gray-400 mt-2">Description of the project goes here.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)' }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-white text-2xl">Project 2</h3>
            <p className="text-gray-400 mt-2">Description of the project goes here.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)' }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-white text-2xl">Project 3</h3>
            <p className="text-gray-400 mt-2">Description of the project goes here.</p>
          </motion.div>
          {/* Add more projects here */}
        </div>
      </div>
    </section>
  );
}
