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
    question: 'Bu harfi bul!',
    type: 'letter-match',
    letters: [
      { upper: 'A', lower: 'a' },
      { upper: 'E', lower: 'e' },
      { upper: 'K', lower: 'k' },
      { upper: 'M', lower: 'm' },
      { upper: 'O', lower: 'o' },
      { upper: 'S', lower: 's' },
      { upper: 'T', lower: 't' },
      { upper: 'Y', lower: 'y' },
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

export const createLetterQuestion = (activity, previousQuestion) => {
  const availableLetters = activity.letters.filter((letter) => letter.upper !== previousQuestion?.answer);
  const target = shuffle(availableLetters.length > 0 ? availableLetters : activity.letters)[0];
  const distractors = shuffle(activity.letters.filter((letter) => letter.upper !== target.upper))
    .slice(0, 2)
    .map((letter) => letter.upper);

  return {
    question: activity.question,
    answer: target.upper,
    choices: shuffle([target.upper, ...distractors]),
    visual: [target.upper, target.lower],
  };
};

export const createActivityQuestion = (activity, previousQuestion) => {
  if (activity.type === 'counting') {
    return createCountingQuestion(activity, previousQuestion);
  }

  if (activity.type === 'letter-match') {
    return createLetterQuestion(activity, previousQuestion);
  }

  return {
    question: activity.question,
    answer: activity.answer,
    choices: activity.choices,
    visual: activity.visual,
  };
};
