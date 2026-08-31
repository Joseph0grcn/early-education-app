import { motion } from 'framer-motion';

export default function ChoiceButton({ children, onClick, selected, correct }) {
  const resultClass =
    selected && correct
      ? 'bg-emerald-300 ring-emerald-500'
      : selected
        ? 'bg-rose-200 ring-rose-400'
        : 'bg-white ring-white';

  return (
    <motion.button
      type="button"
      className={`flex min-h-24 items-center justify-center rounded-[1.75rem] px-5 font-rounded text-5xl font-black text-slate-800 shadow-soft ring-4 ${resultClass} focus:outline-none focus-visible:ring-8 sm:min-h-28 sm:text-6xl`}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
