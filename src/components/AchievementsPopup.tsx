import { signal, useSignalEffect } from '@preact/signals';
import {
  EAchievement,
  queuedAchievements,
  unlockAchievement,
} from '../helpers/achievements';
import '../scss/Achievements.scss';
import { isMobile } from 'react-device-detect';

interface AchievementItemProps {
  achievement: { name: string; icon: string };
}

const konamiInput = signal<string[]>([]);

function AchievementsPopup() {
  const handleKeydown = (e: KeyboardEvent) => {
    const key = e.key;

    if (key === 'F12') unlockAchievement(EAchievement.INTERLOPER);

    konamiInput.value.push(key);
    if (konamiInput.value.length > 10) konamiInput.value.shift();
    if (
      JSON.stringify(konamiInput.value).toLowerCase() ===
      JSON.stringify([
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
      ]).toLowerCase()
    ) {
      unlockAchievement(EAchievement.KONAMI_CODE);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 500 || window.innerHeight < 500)
      unlockAchievement(EAchievement.I_CANT_BREATHE);
  };

  useSignalEffect(() => {
    unlockAchievement(EAchievement.SO_IT_BEGINS);
    if (isMobile) {
      unlockAchievement(EAchievement.INTERLOPER);
      unlockAchievement(EAchievement.KONAMI_CODE);
    }

    if (isMobile) window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleResize);

    return () => {
      if (isMobile) window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="ach-area">
      {queuedAchievements.value.map((ach) => (
        <AchievementItem key={ach.name} achievement={ach} />
      ))}
    </div>
  );
}

function AchievementItem({ achievement }: AchievementItemProps) {
  const isVisible = signal<boolean>(true);

  useSignalEffect(() => {
    const timer = setTimeout(() => (isVisible.value = false), 5000);
    return () => clearTimeout(timer);
  });

  return isVisible.value ? (
    <div className="ani-div show-achievement">
      <div className="ani-icon">
        <img
          src={achievement.icon}
          alt={achievement.name}
          width={80}
          height={80}
        />
      </div>
      <span className="text-md">
        <b>Achievement Unlocked!</b>
        <div>{achievement.name}</div>
      </span>
    </div>
  ) : (
    <></>
  );
}

export default AchievementsPopup;
