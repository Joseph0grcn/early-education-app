import { motion } from 'framer-motion';
import { Gamepad2, Hash, Home as HomeIcon, Music2, PencilLine, Star } from 'lucide-react';
import BottomNav from '../components/layout/BottomNav.jsx';
import CategoryButton from '../components/ui/CategoryButton.jsx';
import { useSound } from '../hooks/useSound.js';

const categories = [
  {
    title: 'Sayılar',
    icon: Hash,
    colors: 'from-sky-400 to-cyan-300',
    ring: 'ring-sky-200',
  },
  {
    title: 'Harfler',
    icon: PencilLine,
    colors: 'from-amber-300 to-yellow-200',
    ring: 'ring-amber-200',
  },
  {
    title: 'Oyunlar',
    icon: Gamepad2,
    colors: 'from-emerald-400 to-lime-300',
    ring: 'ring-emerald-200',
  },
];

export default function Home() {
  const { play } = useSound();

  return (
    <main className="min-h-dvh overflow-hidden bg-gradient-to-b from-sky-100 via-emerald-50 to-yellow-50 pb-24 text-slate-800">
      <section className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-8 pt-8 sm:px-8 md:pt-12">
        <div className="relative flex flex-1 flex-col items-center justify-center gap-8">
          <motion.div
            aria-hidden="true"
            className="absolute left-2 top-4 h-20 w-20 rounded-full bg-yellow-200/80 blur-sm sm:h-28 sm:w-28"
            animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-16 right-0 h-24 w-24 rounded-full bg-cyan-200/80 blur-sm sm:h-32 sm:w-32"
            animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.header
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft ring-4 ring-yellow-200 sm:h-24 sm:w-24">
              <Star className="h-11 w-11 fill-yellow-300 text-yellow-400 sm:h-14 sm:w-14" strokeWidth={3} />
            </div>
            <h1 className="font-rounded text-4xl font-black leading-tight text-slate-800 sm:text-6xl">
              Merhaba Minik Kaşif!
            </h1>
            <p className="mx-auto mt-3 max-w-lg font-rounded text-xl font-extrabold text-slate-600 sm:text-2xl">
              Bugün ne keşfedelim?
            </p>
          </motion.header>

          <div className="relative z-10 grid w-full gap-4 sm:grid-cols-3 sm:gap-5">
            {categories.map((category, index) => (
              <CategoryButton
                key={category.title}
                {...category}
                delay={index * 0.08}
                onClick={() => play('pop')}
              />
            ))}
          </div>
        </div>
      </section>

      <BottomNav
        items={[
          { label: 'Ana Sayfa', icon: HomeIcon, active: true },
          { label: 'Ses', icon: Music2 },
          { label: 'Yıldız', icon: Star },
        ]}
      />
    </main>
  );
}
