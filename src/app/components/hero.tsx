import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Me from '../image/me.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import SharedBackground from './sharedbackground';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: scrollY > -0.1 ? 1 : 0,
      y: scrollY > 0 ? 0 : 50,
      transition: { duration: 1 }
    });
  }, [scrollY, controls]);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with Gradient and Animation */}
      <SharedBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="relative z-10 flex flex-col items-center px-4 py-8"
      >
        {/* Picture with AI Pulse Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gray-700"
        >
          <Image
            src={Me}
            alt="Me"
            layout="responsive"
            width={256}
            height={256}
            className="object-cover"
          />
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.3 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
            className="absolute inset-0 rounded-full bg-blue-700 opacity-50"
          ></motion.div>
        </motion.div>

        {/* Info with Text Animation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-8 px-4"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
          >
            Shtiphat Soysangwarn
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-4"
          >
            Website | Kami
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg mx-auto"
          >
            I'm a high school student with a passion for AI and technology. My dream is to become an AI engineer, and I'm dedicated to learning and growing in this exciting field.
          </motion.p>
        </motion.div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">My Info</h3>
            <p className="text-gray-400 text-sm sm:text-base">Email: example@example.com</p>
            <p className="text-gray-400 text-sm sm:text-base">Phone: +123 456 7890</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">Social Media</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/k4m1.kxm1/" className="text-blue-400 hover:text-white text-xl sm:text-2xl md:text-3xl">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/shitiphat-soysangwarn-1a76b02b2/" className="text-blue-400 hover:text-white text-xl sm:text-2xl md:text-3xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/KamiK4M1" className="text-blue-400 hover:text-white text-xl sm:text-2xl md:text-3xl">
                <FaGithub />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">More Info</h3>
            <p className="text-gray-400 text-sm sm:text-base">Portfolio.</p>
            <a href="https://www.canva.com/design/DAF6HUxeDJ8/KsL9QWideLoct84jMvnNIg/edit?utm_content=DAF6HUxeDJ8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="text-blue-400 hover:underline text-sm sm:text-base">View Portfolio</a>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Glowing Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
      >
        <div className="h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70"></div>
      </motion.div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>


    </section>
  );
}