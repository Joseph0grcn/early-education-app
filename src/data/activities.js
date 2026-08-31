import { Gamepad2, Hash, PencilLine } from 'lucide-react';

export const activities = {
  sayilar: {
    path: '/sayilar',
    title: 'Sayılar',
    question: 'Kaç yıldız var?',
    answer: '3',
    icon: Hash,
    colors: 'from-sky-400 to-cyan-300',
    ring: 'ring-sky-200',
    background: 'from-sky-100 via-cyan-50 to-yellow-50',
    choices: ['2', '3', '5'],
    visual: ['★', '★', '★'],
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
