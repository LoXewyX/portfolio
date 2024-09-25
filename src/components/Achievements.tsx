import { signal, useSignalEffect } from '@preact/signals';
import {
  EAchievement,
  queuedAchievements,
  unlockAchievement,
} from '../signals/Achievements';
import '../scss/Achievements.scss';

const konamiInput = signal<string[]>([]);

const Achievements = () => {
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
    if (window.innerWidth < 500 || window.innerHeight < 100)
      unlockAchievement(EAchievement.I_CANT_BREATHE);
  };

  useSignalEffect(() => {
    unlockAchievement(EAchievement.SO_IT_BEGINS);
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <div className="ach-area">
        {queuedAchievements.value.map((ach, index) => (
          <div
            key={index}
            className="ani-div show-achievement"
            style={{ transition: 'opacity 1s' }}
          >
            <div className="ani-icon">
              <img src={ach.icon} alt={ach.name} width={80} height={80} />
            </div>
            <span className="text-md">
              <b>Achievement Unlocked!</b>
              <div>{ach.name}</div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievements;
