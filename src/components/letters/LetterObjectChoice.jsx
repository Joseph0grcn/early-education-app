import { motion } from 'framer-motion';

export default function LetterObjectChoice({ object, isWrong, isCorrect, onSelect, dropTargetRef }) {
  const handleDragEnd = (_, info) => {
    const target = dropTargetRef?.current;

    if (!target) {
      return;
    }

    const bounds = target.getBoundingClientRect();
    const { x, y } = info.point;

    if (x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom) {
      onSelect();
    }
  };

  return (
    <motion.button
      type="button"
      className={`flex min-h-36 flex-col items-center justify-center gap-2 rounded-[2rem] bg-white p-4 font-rounded shadow-soft ring-4 focus:outline-none focus-visible:ring-8 sm:min-h-44 ${
        isCorrect ? 'ring-emerald-400' : 'ring-amber-100'
      }`}
      animate={
        isWrong
          ? {
              x: [0, -8, 8, -6, 6, 0],
              opacity: [1, 0.62, 1],
            }
          : {
              x: 0,
              opacity: 1,
            }
      }
      transition={{ duration: 0.45 }}
      drag
      dragSnapToOrigin
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={onSelect}
      aria-label={object.name}
    >
      <span className="text-6xl sm:text-7xl" aria-hidden="true">
        {object.emoji}
      </span>
      <span className="text-2xl font-black text-slate-700 sm:text-3xl">{object.name}</span>
    </motion.button>
  );
}
