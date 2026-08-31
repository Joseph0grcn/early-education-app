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
    letters: [
      'A',
      'B',
      'C',
      'Ç',
      'D',
      'E',
      'F',
      'G',
      'Ğ',
      'H',
      'I',
      'İ',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'Ö',
      'P',
      'R',
      'S',
      'Ş',
      'T',
      'U',
      'Ü',
      'V',
      'Y',
      'Z',
    ],
    objects: [
      { id: 'araba', name: 'Araba', emoji: '🚗', startsWith: 'A' },
      { id: 'ari', name: 'Arı', emoji: '🐝', startsWith: 'A' },
      { id: 'ay', name: 'Ay', emoji: '🌙', startsWith: 'A' },
      { id: 'balon', name: 'Balon', emoji: '🎈', startsWith: 'B' },
      { id: 'balik', name: 'Balık', emoji: '🐟', startsWith: 'B' },
      { id: 'bebek', name: 'Bebek', emoji: '👶', startsWith: 'B' },
      { id: 'ceviz', name: 'Ceviz', emoji: '🌰', startsWith: 'C' },
      { id: 'cetvel', name: 'Cetvel', emoji: '📏', startsWith: 'C' },
      { id: 'civciv', name: 'Civciv', emoji: '🐤', startsWith: 'C' },
      { id: 'cicek', name: 'Çiçek', emoji: '🌼', startsWith: 'Ç' },
      { id: 'cilek', name: 'Çilek', emoji: '🍓', startsWith: 'Ç' },
      { id: 'canta', name: 'Çanta', emoji: '🎒', startsWith: 'Ç' },
      { id: 'davul', name: 'Davul', emoji: '🥁', startsWith: 'D' },
      { id: 'deniz', name: 'Deniz', emoji: '🌊', startsWith: 'D' },
      { id: 'dondurma', name: 'Dondurma', emoji: '🍦', startsWith: 'D' },
      { id: 'elma', name: 'Elma', emoji: '🍎', startsWith: 'E' },
      { id: 'ev', name: 'Ev', emoji: '🏠', startsWith: 'E' },
      { id: 'eldiven', name: 'Eldiven', emoji: '🧤', startsWith: 'E' },
      { id: 'fil', name: 'Fil', emoji: '🐘', startsWith: 'F' },
      { id: 'fare', name: 'Fare', emoji: '🐭', startsWith: 'F' },
      { id: 'firca', name: 'Fırça', emoji: '🖌️', startsWith: 'F' },
      { id: 'gunes', name: 'Güneş', emoji: '☀️', startsWith: 'G' },
      { id: 'gemi', name: 'Gemi', emoji: '🚢', startsWith: 'G' },
      { id: 'gozluk', name: 'Gözlük', emoji: '👓', startsWith: 'G' },
      { id: 'dag', name: 'Dağ', emoji: '⛰️', startsWith: 'D', includes: ['Ğ'] },
      { id: 'yagmur', name: 'Yağmur', emoji: '🌧️', startsWith: 'Y', includes: ['Ğ'] },
      { id: 'agac', name: 'Ağaç', emoji: '🌳', startsWith: 'A', includes: ['Ğ'] },
      { id: 'halat', name: 'Halat', emoji: '🪢', startsWith: 'H' },
      { id: 'havuc', name: 'Havuç', emoji: '🥕', startsWith: 'H' },
      { id: 'helikopter', name: 'Helikopter', emoji: '🚁', startsWith: 'H' },
      { id: 'isik', name: 'Işık', emoji: '💡', startsWith: 'I' },
      { id: 'irmak', name: 'Irmak', emoji: '🏞️', startsWith: 'I' },
      { id: 'iglo', name: 'Iglo', emoji: '🧊', startsWith: 'I' },
      { id: 'inek', name: 'İnek', emoji: '🐄', startsWith: 'İ' },
      { id: 'incir', name: 'İncir', emoji: '🟣', startsWith: 'İ' },
      { id: 'igne', name: 'İğne', emoji: '🪡', startsWith: 'İ' },
      { id: 'jaguar', name: 'Jaguar', emoji: '🐆', startsWith: 'J' },
      { id: 'jelibon', name: 'Jelibon', emoji: '🍬', startsWith: 'J' },
      { id: 'jet', name: 'Jet', emoji: '✈️', startsWith: 'J' },
      { id: 'kedi', name: 'Kedi', emoji: '🐱', startsWith: 'K' },
      { id: 'kalp', name: 'Kalp', emoji: '❤️', startsWith: 'K' },
      { id: 'kitap', name: 'Kitap', emoji: '📚', startsWith: 'K' },
      { id: 'limon', name: 'Limon', emoji: '🍋', startsWith: 'L' },
      { id: 'lale', name: 'Lale', emoji: '🌷', startsWith: 'L' },
      { id: 'leylek', name: 'Leylek', emoji: '🪽', startsWith: 'L' },
      { id: 'muz', name: 'Muz', emoji: '🍌', startsWith: 'M' },
      { id: 'makas', name: 'Makas', emoji: '✂️', startsWith: 'M' },
      { id: 'masa', name: 'Masa', emoji: '🪑', startsWith: 'M' },
      { id: 'nar', name: 'Nar', emoji: '🍎', startsWith: 'N' },
      { id: 'nota', name: 'Nota', emoji: '🎵', startsWith: 'N' },
      { id: 'nane', name: 'Nane', emoji: '🌿', startsWith: 'N' },
      { id: 'ok', name: 'Ok', emoji: '🏹', startsWith: 'O' },
      { id: 'orman', name: 'Orman', emoji: '🌲', startsWith: 'O' },
      { id: 'oyuncak', name: 'Oyuncak', emoji: '🧸', startsWith: 'O' },
      { id: 'ordek', name: 'Ördek', emoji: '🦆', startsWith: 'Ö' },
      { id: 'opucuk', name: 'Öpücük', emoji: '💋', startsWith: 'Ö' },
      { id: 'ortu', name: 'Örtü', emoji: '🧺', startsWith: 'Ö' },
      { id: 'pasta', name: 'Pasta', emoji: '🎂', startsWith: 'P' },
      { id: 'panda', name: 'Panda', emoji: '🐼', startsWith: 'P' },
      { id: 'paten', name: 'Paten', emoji: '🛼', startsWith: 'P' },
      { id: 'robot', name: 'Robot', emoji: '🤖', startsWith: 'R' },
      { id: 'renk', name: 'Renk', emoji: '🎨', startsWith: 'R' },
      { id: 'roket', name: 'Roket', emoji: '🚀', startsWith: 'R' },
      { id: 'sincap', name: 'Sincap', emoji: '🐿️', startsWith: 'S' },
      { id: 'simit', name: 'Simit', emoji: '🥨', startsWith: 'S' },
      { id: 'saat', name: 'Saat', emoji: '⏰', startsWith: 'S' },
      { id: 'sapka', name: 'Şapka', emoji: '🎩', startsWith: 'Ş' },
      { id: 'semsiye', name: 'Şemsiye', emoji: '☂️', startsWith: 'Ş' },
      { id: 'seker', name: 'Şeker', emoji: '🍬', startsWith: 'Ş' },
      { id: 'tavsan', name: 'Tavşan', emoji: '🐰', startsWith: 'T' },
      { id: 'tas', name: 'Taş', emoji: '🪨', startsWith: 'T' },
      { id: 'terazi', name: 'Terazi', emoji: '⚖️', startsWith: 'T' },
      { id: 'ucak', name: 'Uçak', emoji: '✈️', startsWith: 'U' },
      { id: 'ugur-bocegi', name: 'Uğur Böceği', emoji: '🐞', startsWith: 'U' },
      { id: 'uydu', name: 'Uydu', emoji: '🛰️', startsWith: 'U' },
      { id: 'uzum', name: 'Üzüm', emoji: '🍇', startsWith: 'Ü' },
      { id: 'utu', name: 'Ütü', emoji: '🧺', startsWith: 'Ü' },
      { id: 'unicorn', name: 'Ünikorn', emoji: '🦄', startsWith: 'Ü' },
      { id: 'vazo', name: 'Vazo', emoji: '🏺', startsWith: 'V' },
      { id: 'vapur', name: 'Vapur', emoji: '⛴️', startsWith: 'V' },
      { id: 'visne', name: 'Vişne', emoji: '🍒', startsWith: 'V' },
      { id: 'yildiz', name: 'Yıldız', emoji: '⭐', startsWith: 'Y' },
      { id: 'yaprak', name: 'Yaprak', emoji: '🍃', startsWith: 'Y' },
      { id: 'yoyo', name: 'Yoyo', emoji: '🪀', startsWith: 'Y' },
      { id: 'zil', name: 'Zil', emoji: '🔔', startsWith: 'Z' },
      { id: 'zebra', name: 'Zebra', emoji: '🦓', startsWith: 'Z' },
      { id: 'zar', name: 'Zar', emoji: '🎲', startsWith: 'Z' },
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

  const nearby = [answer - 1, answer + 1, answer + 2].filter(
    (choice) => choice >= activity.min && choice <= activity.max,
  );
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
  const isSoftG = letter === 'Ğ';
  const correctObjects = activity.objects.filter((item) =>
    isSoftG ? item.includes?.includes(letter) : item.startsWith === letter,
  );
  const wrongObjects = activity.objects.filter((item) =>
    isSoftG ? !item.includes?.includes(letter) : item.startsWith !== letter,
  );
  const correctObject = shuffle(correctObjects)[0];
  const distractors = shuffle(wrongObjects).slice(0, 2);

  return {
    question: isSoftG ? 'İçinde Ğ olan hangisi?' : activity.question,
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
