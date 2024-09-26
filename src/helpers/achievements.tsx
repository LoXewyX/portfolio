import { signal } from '@preact/signals';
import { Howl } from 'howler';
import { isMobile } from 'react-device-detect';
import JSConfetti from 'js-confetti';
import imgAch1 from '/img/ach1.webp';
import imgAch2 from '/img/ach2.webp';
import imgAch3 from '/img/ach3.webp';
import imgAch4 from '/img/ach4.webp';
import imgAch5 from '/img/ach5.webp';
import imgAch6 from '/img/ach6.webp';

interface IAchievement {
  name: string;
  hint: string;
  icon: string;
  unlocked: boolean;
}

enum EAchievement {
  SO_IT_BEGINS,
  INTERLOPER,
  KONAMI_CODE,
  I_CANT_BREATHE,
  THATS_ME,
  FIVE_ACHIEVEMENTS,
}

const amount = signal<number>(0);
const achievements = signal<IAchievement[]>([
  {
    name: 'The Quest Begins',
    hint: 'Click on screen to start',
    icon: imgAch1,
    unlocked: false,
  },
  {
    name: isMobile ? 'This achievement is available for PC' : 'Interloper!',
    hint: 'Open devtools',
    icon: imgAch2,
    unlocked: false,
  },
  {
    name: 'Boomer Gamer',
    hint: 'A very secret key pattern that videogames had',
    icon: imgAch3,
    unlocked: false,
  },
  {
    name: "I can't breathe",
    hint: 'Choke this page',
    icon: imgAch4,
    unlocked: false,
  },
  {
    name: "That's me!",
    hint: 'Click on my brand',
    icon: imgAch5,
    unlocked: false,
  },
  {
    name: 'You completed 5 achievements!',
    hint: 'Unlock 5 achievements',
    icon: imgAch6,
    unlocked: false,
  },
]);
const queuedAchievements = signal<IAchievement[]>([]);

const updateAchievement = (index: number, updates: Partial<IAchievement>) => {
  if (achievements.value[index]) {
    achievements.value[index] = {
      ...achievements.value[index],
      ...updates,
    };
  }
};

const unlockAchievement = (index: number) => {
  if (achievements.value[index].unlocked) return;

  updateAchievement(index, { unlocked: true });
  const sound = new Howl({ src: ['/sounds/ping.mp3'], preload: true });
  sound.play();

  sound.once('play', () => {
    const achievement = achievements.value[index];
    queuedAchievements.value = [...queuedAchievements.value, achievement];
    amount.value += 1;

    setTimeout(() => {
      queuedAchievements.value = queuedAchievements.value.filter(
        (ach) => ach !== achievement
      );
    }, 5000);

    if (amount.value >= 5) unlockAchievement(EAchievement.FIVE_ACHIEVEMENTS);
    if (amount.value === achievements.value.length)
      new JSConfetti().addConfetti();
  });
};

export {
  type IAchievement,
  EAchievement,
  unlockAchievement,
  achievements,
  amount,
  queuedAchievements,
};
