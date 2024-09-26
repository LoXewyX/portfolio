import { signal } from '@preact/signals';
import { useSignalEffect } from '@preact/signals';

const cursorPosition = signal<{
  x: number;
  y: number;
  scrollY: number;
}>({ x: 0, y: 0, scrollY: 0 });
const isPointer = signal<boolean>(true);
const isVisible = signal<boolean>(true);

function Cursor() {
  const handleMouseMove = (e: MouseEvent) => {
    cursorPosition.value = {
      x: e.pageX,
      y: e.pageY,
      scrollY: window.scrollY,
    };
    isPointer.value =
      window.getComputedStyle(e.target as Element).cursor === 'pointer';
    isVisible.value = true;
  };

  const handleMouseOut = (e: MouseEvent) => {
    if (
      e.clientY <= 0 ||
      e.clientX <= 0 ||
      e.clientX >= window.innerWidth ||
      e.clientY >= window.innerHeight
    ) {
      isPointer.value = false;
      isVisible.value = false;
    }
  };

  const handleScroll = () => (isPointer.value = false);

  useSignalEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('scrollend', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('scrollend', handleScroll);
    };
  });

  return (
    <div
      class={`cursor fixed pointer-events-none z-50 transition-opacity duration-200 rounded-full border-[2px] border-white border-solid ${
        isVisible.value ? 'opacity-100' : 'opacity-0'
      } ${
        isPointer.value
          ? 'w-[40px] h-[40px]'
          : 'w-[20px] h-[20px]'
      }`}
      style={{
        transform: `translate(${cursorPosition.value.x - (isPointer.value ? 20 : 10)}px, ${
          cursorPosition.value.y - (isPointer.value ? 20 : 10) - cursorPosition.value.scrollY
        }px)`,
      }}
    ></div>
  );
}

export default Cursor;
