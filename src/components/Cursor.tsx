import { signal } from '@preact/signals';
import { useSignalEffect } from '@preact/signals';
import '../scss/Cursor.scss';

const cursorPosition = signal<{
  x: number;
  y: number;
  scrollY: number;
}>({
  x: 0,
  y: 0,
  scrollY: 0,
});
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

  const handleScroll = () => {
    isPointer.value = false;
  };

  useSignalEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      className={`cursor-container ${
        isVisible.value ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${
          cursorPosition.value.x - (isPointer.value ? 15 : 10)
        }px, ${
          cursorPosition.value.y -
          (isPointer.value ? 15 : 10) -
          cursorPosition.value.scrollY
        }px)`,
      }}
    >
      <div
        className={`cursor border-blue-400 ${
          isPointer.value ? 'large' : 'small'
        }`}
      ></div>
    </div>
  );
}

export default Cursor;
