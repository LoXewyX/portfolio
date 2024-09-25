import '../scss/Orbit.scss';

function NotFound() {
  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center flex-col overflow-hidden p-8">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-purple-900 via-blue-900 to-black opacity-50"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="text-6xl md:text-8xl font-bold mb-4 zerocool">
            Oops! Page Not Found
          </div>

          <div className="mb-8 text-lg text-gray-400">
            The page you're looking for doesn't exist. How about heading back
            home?
          </div>

          <a
            href="/"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Go Back Home
          </a>
        </div>

        <div className="atom">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="molecule"
              style={{ '--initial-rotate': `${Math.random() * 360}deg` }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NotFound;
