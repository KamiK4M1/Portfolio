import { motion } from "framer-motion";
import { FaPython, FaLinux } from "react-icons/fa"; // Importing React Icons
import { SiTensorflow, SiPytorch, SiCplusplus, SiNextdotjs,  } from "react-icons/si";
import SharedBackground from "./sharedbackground";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-800 py-20 relative">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

      <SharedBackground />

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-8"
        >
          Skills & Technologies
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
          >
            <FaPython className="text-white text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold">Python</h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
          >
            <SiTensorflow className="text-white text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold">TensorFlow</h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
          >
            <SiPytorch className="text-white text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold">PyTorch</h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
          >
            <FaLinux className="text-white text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold">Linux</h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
          >
            <SiCplusplus className="text-white text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold">C++</h3>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center"
          >
            <SiNextdotjs className="text-white text-4xl mb-4" />
            <h3 className="text-white text-xl font-semibold">Next.js</h3>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}
