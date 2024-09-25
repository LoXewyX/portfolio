import { signal } from '@preact/signals';
import { Howl } from 'howler';

import Ach1 from '/img/ach1.webp';
import Ach2 from '/img/ach2.webp';
import Ach3 from '/img/ach3.webp';
import Ach4 from '/img/ach4.webp';
import Ach5 from '/img/ach5.webp';
import Ach6 from '/img/ach6.webp';

interface IAchievement {
  name: string;
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

const achievements = signal<IAchievement[]>([
  { name: 'The Quest Begins', icon: Ach1, unlocked: false },
  { name: 'Interloper!', icon: Ach2, unlocked: false },
  { name: 'Boomer Gamer', icon: Ach3, unlocked: false },
  { name: "I can't breathe", icon: Ach4, unlocked: false },
  { name: "That's me!", icon: Ach5, unlocked: false },
  { name: 'You completed 5 achievements!', icon: Ach6, unlocked: false },
]);

const queuedAchievements = signal<IAchievement[]>([]);
const amount = signal<number>(0);

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
    }, 10000);

    // Unlock additional achievement if 5 achievements are unlocked
    if (amount.value >= 5) {
      unlockAchievement(EAchievement.FIVE_ACHIEVEMENTS);
    }
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
