import { Gamepad2, Hash, PencilLine } from 'lucide-react';

export const activities = {
  sayilar: {
    path: '/sayilar',
    title: 'Sayılar',
    question: 'Kaç * var?',
    type: 'counting',
    symbol: '*',
    min: 1,
    max: 6,
    icon: Hash,
    colors: 'from-sky-400 to-cyan-300',
    ring: 'ring-sky-200',
    background: 'from-sky-100 via-cyan-50 to-yellow-50',
  },
  harfler: {
    path: '/harfler',
    title: 'Harfler',
    question: 'A harfi hangisi?',
    answer: 'A',
    icon: PencilLine,
    colors: 'from-amber-300 to-yellow-200',
    ring: 'ring-amber-200',
    background: 'from-amber-100 via-yellow-50 to-rose-50',
    choices: ['A', 'E', 'M'],
    visual: ['A', 'a'],
  },
  oyunlar: {
    path: '/oyunlar',
    title: 'Oyunlar',
    question: 'Gülen yüzü seç!',
    answer: '😊',
    icon: Gamepad2,
    colors: 'from-emerald-400 to-lime-300',
    ring: 'ring-emerald-200',
    background: 'from-emerald-100 via-lime-50 to-sky-50',
    choices: ['😊', '😴', '😮'],
    visual: ['😊'],
  },
};

export const activityList = Object.values(activities);

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const createCountingQuestion = (activity, previousAnswer) => {
  let answer = randomBetween(activity.min, activity.max);

  if (activity.max > activity.min) {
    while (String(answer) === String(previousAnswer)) {
      answer = randomBetween(activity.min, activity.max);
    }
  }

  const nearby = [answer - 1, answer + 1, answer + 2]
    .filter((choice) => choice >= activity.min && choice <= activity.max);
  const fallback = Array.from({ length: activity.max - activity.min + 1 }, (_, index) => activity.min + index);
  const choices = shuffle([...new Set([answer, ...nearby, ...fallback])])
    .slice(0, 3)
    .map(String);

  if (!choices.includes(String(answer))) {
    choices[0] = String(answer);
  }

  return {
    question: activity.question,
    answer: String(answer),
    choices: shuffle(choices),
    visual: Array.from({ length: answer }, () => activity.symbol),
  };
};

export const createActivityQuestion = (activity, previousAnswer) => {
  if (activity.type === 'counting') {
    return createCountingQuestion(activity, previousAnswer);
  }

  return {
    question: activity.question,
    answer: activity.answer,
    choices: activity.choices,
    visual: activity.visual,
  };
};
