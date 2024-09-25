import { signal, useSignalEffect } from '@preact/signals';
import { amount, achievements } from '../signals/Achievements';
import Achievements from './Achievements';

const openAchsMenu = signal<boolean>(false);
const shiftLeftPressed = signal<[boolean, boolean]>([false, false]);

function Footer() {
  useSignalEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('keyup', handleKeyup);
    };
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === 'ShiftLeft') shiftLeftPressed.value[0] = true;
    else if (e.code === 'Tab') {
      e.preventDefault();
      shiftLeftPressed.value[1] = true;
    }

    if (shiftLeftPressed.value[0] && shiftLeftPressed.value[1]) {
      e.preventDefault();
      openAchsMenu.value = !openAchsMenu.value;
      shiftLeftPressed.value[0] = false;
      shiftLeftPressed.value[1] = false;
    }
  };

  const handleKeyup = (_: KeyboardEvent) => {
    shiftLeftPressed.value[0] = false;
    shiftLeftPressed.value[1] = false;
  };

  return (
    <footer className="py-8">
      <div className="container mx-auto text-center px-4">
        <p>&copy; 2024 Luis Ruiz. All rights reserved.</p>
        <p>
          Total achievements: {amount.value}/{achievements.value.length}
          <span className="mx-2">|</span>
          <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Shift
          </kbd>{' '}
          +{' '}
          <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Tab
          </kbd>
        </p>
      </div>

      <Achievements />

      {/* Achievement list */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl h-screen transition-all duration-300 ease-in-out transform ${
          openAchsMenu.value ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => (openAchsMenu.value = !openAchsMenu.value)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 overflow-y-auto max-h-[80vh]">
          {' '}
          {/* Adjust max height here */}
          {achievements.value.map((ach, index) => (
            <div
              key={index}
              className={`ani-div grad${
                ach.unlocked ? '' : ' locked'
              } flex flex-col items-center transition-opacity duration-1000`}
            >
              <div className="ani-icon mb-4">
                <img src={ach.icon} alt={ach.name} width={80} height={80} />
              </div>
              <span className="text-md text-center">
                <b>Achievement Unlocked!</b>
                <div>{ach.name}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
