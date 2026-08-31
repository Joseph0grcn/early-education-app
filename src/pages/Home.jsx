import { motion } from 'framer-motion';
import { Home as HomeIcon, Music2, Star } from 'lucide-react';
import BottomNav from '../components/layout/BottomNav.jsx';
import CategoryButton from '../components/ui/CategoryButton.jsx';
import { activityList } from '../data/activities.js';
import { useSound } from '../hooks/useSound.js';
import { useAppStore } from '../store/useAppStore.js';

export default function Home() {
  const { play } = useSound();
  const stars = useAppStore((state) => state.stars);

  return (
    <main className="min-h-dvh overflow-hidden bg-gradient-to-b from-sky-100 via-emerald-50 to-yellow-50 pb-24 text-slate-800">
      <section className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-8 pt-8 sm:px-8 md:pt-12">
        <div className="flex justify-end">
          <div className="flex min-h-14 items-center gap-2 rounded-full bg-white px-5 font-rounded text-2xl font-black text-amber-500 shadow-soft ring-4 ring-yellow-100">
            <Star className="h-8 w-8 fill-yellow-300 text-yellow-400" strokeWidth={3} />
            {stars}
          </div>
        </div>

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
            {activityList.map((category, index) => (
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
          { label: 'Ana Sayfa', icon: HomeIcon, to: '/', active: true },
          { label: 'Ses', icon: Music2, to: '/' },
          { label: 'Yıldız', icon: Star, to: '/' },
        ]}
      />
    </main>
  );
}
