import { signal } from '@preact/signals';
import { Menu } from 'react-feather';
import {
  EAchievement,
  achievements,
  unlockAchievement,
  amount,
} from '../helpers/achievements';
import { openAchsMenu } from '../helpers/achievementsMenu';
import '../scss/Header.scss';

const openMenu = signal<boolean>(false);

function Header() {
  const handleMobileMenuClick = () => {
    openMenu.value = !openMenu.value;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-5 backdrop-blur-md px-2 shadow-xl">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          id="nickname"
          className="flex cursor-pointer"
          onClick={() => unlockAchievement(EAchievement.THATS_ME)}
        >
          <svg
            className="mr-2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            viewBox="126 102 150 190"
          >
            <g>
              <path
                id="path0"
                d="M248.500 139.513 C 247.675 140.345,244.763 143.450,242.028 146.413 C 234.183 154.913,230.796 158.400,230.387 158.400 C 230.179 158.400,228.791 157.624,227.304 156.675 C 212.678 147.346,191.716 147.711,176.800 157.556 C 154.041 172.577,148.417 204.102,164.669 225.558 C 166.674 228.205,167.703 226.741,151.988 243.600 C 149.219 246.570,146.559 249.519,146.077 250.154 C 143.853 253.080,146.729 257.146,150.210 255.997 C 151.317 255.631,165.786 240.513,175.708 229.355 L 177.217 227.658 174.774 225.129 C 156.100 205.795,160.828 174.668,184.319 162.287 C 198.228 154.957,216.056 156.837,228.052 166.900 C 229.560 168.165,230.952 169.200,231.145 169.200 C 231.565 169.200,254.388 144.642,255.086 143.438 C 257.462 139.340,251.936 136.047,248.500 139.513 M193.297 178.982 C 172.697 187.078,178.719 217.051,200.800 216.322 C 221.100 215.651,226.574 188.212,208.141 179.519 C 204.274 177.696,197.219 177.440,193.297 178.982"
                stroke="none"
                fill="#242424"
                fill-rule="evenodd"
              />
              <path
                id="path1"
                d="M208.325 103.226 C 211.556 103.460,215.730 103.920,217.600 104.249 C 219.470 104.577,221.900 105.006,223.000 105.202 C 230.767 106.585,239.746 110.049,248.800 115.155 L 254.200 118.200 264.193 118.326 C 271.336 118.416,274.271 118.587,274.486 118.926 C 274.652 119.187,274.791 123.147,274.794 127.726 C 274.797 132.372,274.973 136.376,275.191 136.783 C 275.406 137.185,276.721 139.023,278.112 140.868 C 286.439 151.909,292.726 166.140,295.133 179.400 C 295.373 180.720,295.797 183.060,296.075 184.600 C 297.188 190.748,296.681 208.251,295.196 215.000 C 290.481 236.419,282.020 251.656,266.762 266.206 C 253.437 278.912,234.228 288.200,216.800 290.363 C 214.930 290.595,211.998 290.969,210.284 291.193 C 204.416 291.960,198.271 291.722,188.600 290.354 C 176.999 288.712,165.179 284.535,155.400 278.619 L 151.400 276.200 139.200 276.000 L 127.000 275.800 126.598 264.200 L 126.195 252.600 123.538 248.600 C 116.663 238.253,111.677 225.278,109.627 212.400 C 102.193 165.711,130.762 120.258,175.987 106.823 C 178.249 106.151,181.112 105.429,182.349 105.218 C 183.587 105.006,185.680 104.626,187.000 104.373 C 188.983 103.992,197.983 103.050,201.525 102.852 C 202.034 102.823,205.094 102.992,208.325 103.226 M248.500 139.513 C 247.675 140.345,244.763 143.450,242.028 146.413 C 234.183 154.913,230.796 158.400,230.387 158.400 C 230.179 158.400,228.791 157.624,227.304 156.675 C 212.678 147.346,191.716 147.711,176.800 157.556 C 154.041 172.577,148.417 204.102,164.669 225.558 C 166.674 228.205,167.703 226.741,151.988 243.600 C 149.219 246.570,146.559 249.519,146.077 250.154 C 143.853 253.080,146.729 257.146,150.210 255.997 C 151.317 255.631,165.786 240.513,175.708 229.355 L 177.217 227.658 174.774 225.129 C 156.100 205.795,160.828 174.668,184.319 162.287 C 198.228 154.957,216.056 156.837,228.052 166.900 C 229.560 168.165,230.952 169.200,231.145 169.200 C 231.565 169.200,254.388 144.642,255.086 143.438 C 257.462 139.340,251.936 136.047,248.500 139.513 M193.297 178.982 C 172.697 187.078,178.719 217.051,200.800 216.322 C 221.100 215.651,226.574 188.212,208.141 179.519 C 204.274 177.696,197.219 177.440,193.297 178.982"
                stroke="none"
                fill="#ebebeb"
                fill-rule="evenodd"
              />
              <path
                id="path2"
                d="M127.018 253.610 C 126.891 253.941,126.835 259.069,126.893 265.006 L 127.000 275.800 139.100 275.906 C 145.808 275.965,151.200 275.856,151.200 275.662 C 151.200 275.470,150.229 274.668,149.042 273.880 C 144.169 270.645,133.201 260.358,128.703 254.804 C 127.629 253.478,127.188 253.165,127.018 253.610"
                stroke="none"
                fill="#1b8cb1"
                fill-rule="evenodd"
              />
              <path
                id="path3"
                d="M256.273 120.379 C 259.868 122.780,266.964 128.990,270.908 133.187 L 274.416 136.920 274.308 127.960 L 274.200 119.000 264.044 118.893 L 253.888 118.786 256.273 120.379"
                stroke="none"
                fill="#f75353"
                fill-rule="evenodd"
              />
            </g>
          </svg>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            LoXewyX
          </div>
        </div>

        {/* Right side: Toggle Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={handleMobileMenuClick}
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
              rel="noopener noreferrer"
              className="text-purple-400 transition-colors"
              style={{
                animation: 'hueRotate 5s infinite linear',
              }}
            >
              ???
            </a>
          ) : null}
        </div>

        {/* Mobile full-screen menu */}
        <div
          className={`fixed inset-0 z-20 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl h-screen transition-all duration-300 ease-in-out transform ${
            openMenu.value ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleMobileMenuClick}
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
          <div
            className="hover:text-purple-400 transition-colors"
            onClick={() => (openAchsMenu.value = !openAchsMenu.value)}
          >
            Achievements
          </div>
          {amount.value === achievements.value.length ? (
            <a
              href="https://www.youtube.com/watch?v=NNQdizB4kL8"
              rel="noopener noreferrer"
              className="text-purple-400 transition-colors"
              style={{
                animation: 'hueRotate 5s infinite linear',
              }}
            >
              ???
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default Header;
