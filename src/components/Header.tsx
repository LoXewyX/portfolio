import { signal } from '@preact/signals';
import { Menu } from 'react-feather';
import {
  EAchievement,
  achievements,
  queuedAchievements,
  unlockAchievement,
  amount,
} from '../signals/Achievements';

const openMenu = signal(false);

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg bg-white bg-opacity-5 backdrop-blur-md px-2 shadow-xl">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side: Logo */}
        <h1
          id="nickname"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
          onClick={() => {
            unlockAchievement(EAchievement.THATS_ME);
            console.log(queuedAchievements.value);
          }}
        >
          @LoXewyX
        </h1>

        {/* Right side: Toggle Button */}
        <div
          className="md:hidden"
          onClick={() => (openMenu.value = !openMenu.value)}
        >
          <Menu />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:flex-row space-x-4">
          {['Home', 'Skills', 'Projects', 'Certifications'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
          {amount.value === achievements.value.length ? (
            <a
              href="https://www.youtube.com/watch?v=NNQdizB4kL8"
              className="text-purple-400 transition-colors text-"
              style={{
                animation: 'hueRotate 5s infinite linear',
              }}
            >
              ???
            </a>
          ) : (
            <></>
          )}
        </div>

        {/* Mobile full-screen menu with transition */}
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl h-screen transition-all duration-300 ease-in-out transform ${
            openMenu.value ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => (openMenu.value = !openMenu.value)}
        >
          {['Home', 'Skills', 'Projects', 'Certifications'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
          {amount.value === achievements.value.length ? (
            <a
              href="https://www.youtube.com/watch?v=NNQdizB4kL8"
              className="text-purple-400 transition-colors text-"
              style={{
                animation: 'hueRotate 5s infinite linear',
              }}
            >
              ???
            </a>
          ) : (
            <></>
          )}
        </div>
      </nav>

      {/* Add inline keyframe definition for hue rotation */}
      <style>
        {`
          @keyframes hueRotate {
            from {
              filter: hue-rotate(0deg);
            }
            to {
              filter: hue-rotate(360deg);
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
