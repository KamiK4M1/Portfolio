import { motion } from 'framer-motion';

export default function SharedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>

      {/* Animated glowing orb */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-blue-500 blur-3xl"
      ></motion.div>

      {/* Animated particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: ['-20%', '120%'],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
          ></motion.div>
        ))}
      </motion.div>

      {/* Animated grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-grid-pattern"
        style={{
          backgroundImage: `radial-gradient(circle, #4299e1 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></motion.div>

      {/* Noise overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-noise opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></motion.div>
    </div>
  );
}