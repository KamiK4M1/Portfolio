import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl mb-10">Contact Me</h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <p className="text-gray-400">Email: example@example.com</p>
        </motion.div>
      </div>
    </section>
  );
}