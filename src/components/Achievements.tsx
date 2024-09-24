import { signal, useSignalEffect } from '@preact/signals';
import {
  EAchievement,
  queuedAchievements,
  unlockAchievement,
} from '../signals/Achievements';
import './Achievements.scss';

// Signals
const konamiInput = signal<string[]>([]);

// Function to generate a random color
const randomColor = (): string => {
  return Math.random().toString(16).slice(-6);
};

// Main component
const Achievements = () => {
  const handleKeydown = (event: KeyboardEvent) => {
    const key = event.key;

    // Unlock F12 achievement
    if (key === 'F12') unlockAchievement(EAchievement.INTERLOPER);

    // Process Konami Code input
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

  // Use effects for adding event listeners
  useSignalEffect(() => {
    unlockAchievement(EAchievement.SO_IT_BEGINS);
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleResize);

    // Cleanup
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
            className="ani_div grad"
            style={{
              backgroundColor: `#${randomColor()}`,
              transition: 'opacity 1s',
            }}
          >
            <div className="ani_icon">
              <img src={ach.icon} alt={ach.name} loading="lazy" />
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
