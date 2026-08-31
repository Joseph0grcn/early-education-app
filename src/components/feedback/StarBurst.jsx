import { AnimatePresence, motion } from 'framer-motion';

const stars = [
  { x: -88, y: -82, delay: 0 },
  { x: -34, y: -118, delay: 0.04 },
  { x: 42, y: -108, delay: 0.08 },
  { x: 92, y: -70, delay: 0.12 },
  { x: -66, y: 10, delay: 0.16 },
  { x: 70, y: 14, delay: 0.2 },
];

export default function StarBurst({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
          {stars.map((star, index) => (
            <motion.span
              key={index}
              className="absolute text-5xl text-yellow-400"
              initial={{ opacity: 0, scale: 0.2, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.2, 1.25, 1, 0.8],
                x: star.x,
                y: star.y,
                rotate: 24,
              }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.9, delay: star.delay, ease: 'easeOut' }}
            >
              ★
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
