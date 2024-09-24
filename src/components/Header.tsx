import { EAchievement, queuedAchievements, unlockAchievement } from '../signals/Achievements';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md px-2">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
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
        <div className="hidden md:flex space-x-4">
          {['Home', 'Skills', 'Projects', 'Certifications'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
