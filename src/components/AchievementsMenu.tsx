import { signal, useSignalEffect } from '@preact/signals';
import { achievements } from '../signals/Achievements';
import { openAchsMenu } from '../signals/AchievementsMenu';

const menuHotkey = signal<{ shift: boolean; tab: boolean }>({
  shift: false,
  tab: false,
});

function AchievementsMenu() {
  useSignalEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('keyup', handleKeyup);
    };
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === 'ShiftLeft') menuHotkey.value.shift = true;
    else if (e.code === 'Tab') {
      e.preventDefault();
      menuHotkey.value.tab = true;
    }

    if (menuHotkey.value.tab && menuHotkey.value.shift) {
      openAchsMenu.value = !openAchsMenu.value;
      menuHotkey.value.shift = false;
      menuHotkey.value.tab = false;
    }
  };

  const handleKeyup = (_: KeyboardEvent) => {
    menuHotkey.value.shift = false;
    menuHotkey.value.tab = false;
  };

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl h-screen transition-all duration-300 ease-in-out transform ${
        openAchsMenu.value ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => (openAchsMenu.value = !openAchsMenu.value)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 overflow-y-auto max-h-[80vh]">
        {' '}
        {achievements.value.map((ach, index) => (
          <div
            key={index}
            className={`ani-div grad flex flex-col items-center transition-opacity duration-1000`}
          >
            <div className="ani-icon mb-4">
              <img
                className={ach.unlocked ? '' : 'sepia'}
                src={ach.icon}
                alt={ach.name}
                width={80}
                height={80}
              />
            </div>
            <span className="h-full text-center flex flex-col -full justify-center items-center">
              <b>Achievement Unlocked!</b>
              <div>{ach.unlocked ? ach.name : ach.hint}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsMenu;
