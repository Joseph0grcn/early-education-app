import { Gamepad2, Hash, PencilLine } from 'lucide-react';

export const activities = {
  sayilar: {
    path: '/sayilar',
    title: 'Sayılar',
    questionTemplate: 'Kaç {symbol} var?',
    type: 'counting',
    countItems: ['⭐', '🍎', '🎈', '❤️', '🌼', '🧸'],
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
    question: 'Bu harfle başlayan hangisi?',
    type: 'letter-object',
    letters: ['A', 'B', 'E', 'K', 'M', 'T'],
    objects: [
      { id: 'araba', name: 'Araba', emoji: '🚗', startsWith: 'A' },
      { id: 'ari', name: 'Arı', emoji: '🐝', startsWith: 'A' },
      { id: 'balon', name: 'Balon', emoji: '🎈', startsWith: 'B' },
      { id: 'balik', name: 'Balık', emoji: '🐟', startsWith: 'B' },
      { id: 'elma', name: 'Elma', emoji: '🍎', startsWith: 'E' },
      { id: 'ev', name: 'Ev', emoji: '🏠', startsWith: 'E' },
      { id: 'kedi', name: 'Kedi', emoji: '🐱', startsWith: 'K' },
      { id: 'kalp', name: 'Kalp', emoji: '❤️', startsWith: 'K' },
      { id: 'muz', name: 'Muz', emoji: '🍌', startsWith: 'M' },
      { id: 'makas', name: 'Makas', emoji: '✂️', startsWith: 'M' },
      { id: 'top', name: 'Top', emoji: '⚽', startsWith: 'T' },
      { id: 'tavsan', name: 'Tavşan', emoji: '🐰', startsWith: 'T' },
    ],
    icon: PencilLine,
    colors: 'from-amber-300 to-yellow-200',
    ring: 'ring-amber-200',
    background: 'from-amber-100 via-yellow-50 to-rose-50',
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

const pickCountingSymbol = (items, previousSymbol) => {
  const availableItems = items.filter((item) => item !== previousSymbol);
  return shuffle(availableItems.length > 0 ? availableItems : items)[0];
};

export const createCountingQuestion = (activity, previousQuestion) => {
  const symbol = pickCountingSymbol(activity.countItems, previousQuestion?.symbol);
  let answer = randomBetween(activity.min, activity.max);

  if (activity.max > activity.min) {
    while (String(answer) === String(previousQuestion?.answer)) {
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
    question: activity.questionTemplate.replace('{symbol}', symbol),
    answer: String(answer),
    choices: shuffle(choices),
    symbol,
    visual: Array.from({ length: answer }, () => symbol),
  };
};

export const createLetterObjectQuestion = (activity, previousQuestion) => {
  const availableLetters = activity.letters.filter((letter) => letter !== previousQuestion?.letter);
  const letter = shuffle(availableLetters.length > 0 ? availableLetters : activity.letters)[0];
  const correctObject = shuffle(activity.objects.filter((item) => item.startsWith === letter))[0];
  const distractors = shuffle(activity.objects.filter((item) => item.startsWith !== letter)).slice(0, 2);

  return {
    question: activity.question,
    answer: correctObject.id,
    choices: shuffle([correctObject, ...distractors]),
    letter,
    visual: [letter],
    variant: 'letter-object',
  };
};

export const createActivityQuestion = (activity, previousQuestion) => {
  if (activity.type === 'counting') {
    return createCountingQuestion(activity, previousQuestion);
  }

  if (activity.type === 'letter-object') {
    return createLetterObjectQuestion(activity, previousQuestion);
  }

  return {
    question: activity.question,
    answer: activity.answer,
    choices: activity.choices,
    visual: activity.visual,
  };
};
