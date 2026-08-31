import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Home as HomeIcon, RotateCcw, Star, X } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import BottomNav from '../components/layout/BottomNav.jsx';
import StarBurst from '../components/feedback/StarBurst.jsx';
import ChoiceButton from '../components/ui/ChoiceButton.jsx';
import { activities, activityList, createActivityQuestion } from '../data/activities.js';
import { useSound } from '../hooks/useSound.js';
import { useAppStore } from '../store/useAppStore.js';

export default function ActivityPage() {
  const { slug } = useParams();
  const activity = activities[slug];
  const { play } = useSound();
  const stars = useAppStore((state) => state.stars);
  const addStar = useAppStore((state) => state.addStar);
  const nextQuestionTimer = useRef(null);
  const burstTimer = useRef(null);
  const [question, setQuestion] = useState(() => (activity ? createActivityQuestion(activity) : null));
  const [selected, setSelected] = useState(null);
  const [showBurst, setShowBurst] = useState(false);

  useEffect(() => {
    window.clearTimeout(nextQuestionTimer.current);
    window.clearTimeout(burstTimer.current);
    setQuestion(activity ? createActivityQuestion(activity) : null);
    setSelected(null);
    setShowBurst(false);
  }, [activity, slug]);

  useEffect(() => {
    return () => {
      window.clearTimeout(nextQuestionTimer.current);
      window.clearTimeout(burstTimer.current);
    };
  }, []);

  if (!activity || !question) {
    return <Navigate to="/" replace />;
  }

  const isCorrect = selected === question.answer;

  const handleChoice = (choice) => {
    if (isCorrect) {
      return;
    }

    setSelected(choice);

    if (choice === question.answer) {
      addStar();
      setShowBurst(true);
      play('success');
      burstTimer.current = window.setTimeout(() => setShowBurst(false), 1000);
      nextQuestionTimer.current = window.setTimeout(() => {
        setQuestion((currentQuestion) => createActivityQuestion(activity, currentQuestion?.answer));
        setSelected(null);
      }, 1400);
      return;
    }

    play('oops');
  };

  return (
    <main className={`min-h-dvh overflow-hidden bg-gradient-to-b ${activity.background} pb-24 text-slate-800`}>
      <StarBurst show={showBurst} />

      <section className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-5 pb-8 pt-6 sm:px-8">
        <header className="flex items-center justify-between gap-3">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.04 }}>
            <Link
              to="/"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-700 shadow-soft ring-4 ring-white"
              aria-label="Ana sayfaya dön"
            >
              <ArrowLeft className="h-8 w-8" strokeWidth={3.2} />
            </Link>
          </motion.div>

          <div className="flex min-h-14 items-center gap-2 rounded-full bg-white px-5 font-rounded text-2xl font-black text-amber-500 shadow-soft ring-4 ring-yellow-100">
            <Star className="h-8 w-8 fill-yellow-300 text-yellow-400" strokeWidth={3} />
            {stars}
          </div>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-7 py-8">
          <motion.div
            className={`flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br ${activity.colors} shadow-soft ring-4 ${activity.ring}`}
            initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 170, damping: 14 }}
          >
            <activity.icon className="h-14 w-14 text-slate-800" strokeWidth={3.5} />
          </motion.div>

          <motion.h1
            className="text-center font-rounded text-4xl font-black leading-tight text-slate-800 sm:text-6xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {question.question}
          </motion.h1>

          <div className="flex min-h-32 w-full max-w-xl items-center justify-center gap-4 rounded-[2rem] bg-white/75 p-5 shadow-soft ring-4 ring-white sm:min-h-40">
            {question.visual.map((item, index) => (
              <motion.span
                key={`${item}-${index}`}
                className="font-rounded text-6xl font-black text-sky-700 sm:text-7xl"
                animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.18 }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="grid w-full max-w-2xl grid-cols-3 gap-3 sm:gap-5">
            {question.choices.map((choice) => (
              <ChoiceButton
                key={choice}
                selected={selected === choice}
                correct={choice === question.answer}
                onClick={() => handleChoice(choice)}
              >
                {choice}
              </ChoiceButton>
            ))}
          </div>

          {selected && (
            <motion.div
              className={`flex min-h-16 items-center gap-3 rounded-full px-6 font-rounded text-2xl font-black shadow-soft ${
                isCorrect ? 'bg-emerald-300 text-emerald-950' : 'bg-rose-200 text-rose-950'
              }`}
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
            >
              {isCorrect ? <Check className="h-8 w-8" strokeWidth={3.5} /> : <X className="h-8 w-8" strokeWidth={3.5} />}
              {isCorrect ? 'Harika!' : 'Tekrar dene'}
            </motion.div>
          )}

          <motion.button
            type="button"
            className="flex min-h-14 items-center gap-2 rounded-full bg-white px-5 font-rounded text-xl font-black text-slate-700 shadow-soft ring-4 ring-white"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.04 }}
            onClick={() => {
              window.clearTimeout(nextQuestionTimer.current);
              window.clearTimeout(burstTimer.current);
              setQuestion((currentQuestion) => createActivityQuestion(activity, currentQuestion?.answer));
              setSelected(null);
              setShowBurst(false);
            }}
          >
            <RotateCcw className="h-6 w-6" strokeWidth={3.2} />
            Yenile
          </motion.button>
        </div>
      </section>

      <BottomNav
        items={[
          { label: 'Ana Sayfa', icon: HomeIcon, to: '/', active: false },
          ...activityList.slice(0, 2).map((item) => ({
            label: item.title,
            icon: item.icon,
            to: item.path,
            active: item.path === activity.path,
          })),
        ]}
      />
    </main>
  );
}
