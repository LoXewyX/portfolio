import { signal } from '@preact/signals';
import { Howl } from 'howler';

import Ach1 from '/img/ach1.webp';
import Ach2 from '/img/ach2.webp';
import Ach3 from '/img/ach3.webp';
import Ach4 from '/img/ach4.webp';
import Ach5 from '/img/ach5.webp';
import Ach6 from '/img/ach6.webp';

enum EAchievement {
  SO_IT_BEGINS,
  INTERLOPER,
  KONAMI_CODE,
  I_CANT_BREATHE,
  THATS_ME,
  FIVE_ACHIEVEMENTS,
}

interface IAchievement {
  name: string;
  icon: string;
  unlocked: boolean;
}

const updateAchievement = (index: number, newAchievement: IAchievement) => {
  achievements.value = [
    ...achievements.value.slice(0, index),
    newAchievement,
    ...achievements.value.slice(index + 1),
  ];
};

const unlockAchievement = (i: number) => {
  const achievement = achievements.value[i];

  if (!achievement.unlocked) {
    updateAchievement(i, { ...achievement, unlocked: true });

    const sound = new Howl({
      src: ['/sounds/ping.mp3'],
      preload: true,
    });
    sound.play();

    sound.once('play', () => {
      queuedAchievements.value = [...queuedAchievements.value, achievements.value[i]];
      amount.value += 1;

      setTimeout(() => {
        queuedAchievements.value = queuedAchievements.value.filter(
          (ach) => ach !== achievements.value[i]
        );
      }, 10000);

      // Unlock additional achievement if counter reaches 5
      if (amount.value >= 5) unlockAchievement(EAchievement.FIVE_ACHIEVEMENTS);
    });
  }
};

const amount = signal<number>(0);
const achievements = signal<IAchievement[]>([
  { name: 'The quest begins', icon: Ach1, unlocked: false },
  { name: 'Not so fast!', icon: Ach2, unlocked: false },
  { name: 'Konami Code', icon: Ach3, unlocked: false },
  { name: "I can't breathe", icon: Ach4, unlocked: false },
  { name: "That's me!", icon: Ach5, unlocked: false },
  { name: 'You completed 5 achievements!', icon: Ach6, unlocked: false },
]);
const queuedAchievements = signal<IAchievement[]>([]);

export {
  type IAchievement,
  EAchievement,
  unlockAchievement,
  achievements,
  amount,
  queuedAchievements,
};
