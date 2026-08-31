import { motion } from 'framer-motion';

export default function BottomNav({ items }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t-4 border-white/80 bg-white/90 px-4 py-3 shadow-[0_-12px_30px_rgba(64,93,143,0.12)] backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-3">
        {items.map(({ label, icon: Icon, active }) => (
          <motion.button
            key={label}
            type="button"
            className={`flex min-h-16 items-center justify-center rounded-3xl ${
              active ? 'bg-sky-200 text-sky-900' : 'bg-slate-100 text-slate-600'
            }`}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            aria-label={label}
          >
            <Icon className="h-8 w-8" strokeWidth={3.2} />
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
