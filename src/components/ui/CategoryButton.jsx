import { motion } from 'framer-motion';

export default function CategoryButton({ title, icon: Icon, colors, ring, delay = 0, onClick }) {
  return (
    <motion.button
      type="button"
      className={`min-h-32 rounded-[2rem] bg-gradient-to-br ${colors} p-5 text-left shadow-soft ring-4 ${ring} transition focus:outline-none focus-visible:ring-8 sm:min-h-44`}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.45, type: 'spring', stiffness: 170, damping: 16 }}
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.92, rotate: -1 }}
      onClick={onClick}
      aria-label={`${title} kategorisini aç`}
    >
      <span className="flex h-full min-h-24 flex-col items-center justify-center gap-3 rounded-[1.5rem] bg-white/70 p-4 sm:min-h-32">
        <Icon className="h-14 w-14 text-slate-800 sm:h-16 sm:w-16" strokeWidth={3.5} />
        <span className="font-rounded text-3xl font-black leading-none text-slate-800 sm:text-4xl">
          {title}
        </span>
      </span>
    </motion.button>
  );
}
