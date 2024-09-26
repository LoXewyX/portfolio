import { signal, useComputed, useSignalEffect } from '@preact/signals';
import { isMobile } from 'react-device-detect';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AchievementsPopup from '../../components/AchievementsPopup';
import AchievementsMenu from '../../components/AchievementsMenu';
import Cursor from '../../components/Cursor';
import {
  buttonContent,
  languages,
  frameworks,
  databases,
  styling,
  projects,
  certifications,
} from './data';
import '../../scss/Orbit.scss';

const activeFilter = signal<string>('All');

function Home() {
  const filteredProjects = useComputed(() =>
    activeFilter.value === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter.value)
  );

  useSignalEffect(() => {
    document.title = 'LoXewyX - Portfolio';
  });

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AchievementsMenu />
      {isMobile ? <></> : <Cursor />}
      <Header />
      <section
        id="home"
        className="relative h-screen flex items-center justify-center flex-col overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-b from-purple-900 via-blue-900 to-black opacity-50"></div>
        </div>
        <div className="relative text-center" style={{ zIndex: 1 }}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 zerocool">
            LUIS RUIZ CARACUEL
          </h2>

          <div className="flex justify-center space-x-4">
            {buttonContent.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 bg-opacity-20 hover:bg-opacity-40 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Icon />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
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

      <section
        id="skills"
        className="py-12 md:py-16 bg-gray-900 px-4 md:px-6 lg:px-8"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold my-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Skills
          </h2>
          <h3 className="text-2xl mb-4 mt-8">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {languages.map((skill, i) => (
              <a
                key={i}
                href={skill.url}
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="h-16 mb-2 drop-shadow"
                  loading="lazy"
                />
                <span className="text-sm">{skill.name}</span>
              </a>
            ))}
          </div>

          <h3 className="text-2xl mb-4 mt-8">Frameworks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {frameworks.map((skill, i) => (
              <a
                key={i}
                href={skill.url}
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="h-16 mb-2 drop-shadow"
                  loading="lazy"
                />
                <span className="text-sm">{skill.name}</span>
              </a>
            ))}
          </div>

          <h3 className="text-2xl mb-4 mt-8">Databases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {databases.map((skill, i) => (
              <a
                key={i}
                href={skill.url}
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="h-16 mb-2 drop-shadow"
                  loading="lazy"
                />
                <span className="text-sm">{skill.name}</span>
              </a>
            ))}
          </div>

          <h3 className="text-2xl mb-4 mt-8">Styling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {styling.map((skill, i) => (
              <a
                key={i}
                href={skill.url}
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="h-16 mb-2 drop-shadow"
                  loading="lazy"
                />
                <span className="text-sm">{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-center">
            My Projects
          </h2>
          <div className="flex justify-center mb-8 flex-wrap space-x-4">
            {[
              'All',
              'Web Developement',
              'Desktop Developement',
              'Mobile Developement',
              'Data Science',
            ].map((category) => (
              <button
                key={category}
                onClick={() => (activeFilter.value = category)}
                className={`mt-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter.value === category
                    ? 'bg-purple-700 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.value.map((project, i) => (
              <a
                key={i}
                href={project.url}
                rel="noopener noreferrer"
                className={`${project.color} p-6 rounded shadow`}
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.category}</p>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold my-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AchievementsPopup />
    </div>
  );
}

export default Home;
