import { useRef } from 'preact/hooks';
import { useSignalEffect } from '@preact/signals';
import { isSecretPageEnabled } from '../helpers/secret';
import NotFound from './404';

const Secret: preact.FunctionComponent = () => {
  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: number | undefined;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => func(...args), wait);
    };
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUserInteraction = () => {
    const video = videoRef.current;
    if (video && video.paused) video.play();
  };

  useSignalEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const video = videoRef.current;

    if (!canvas || !ctx || !video) {
      console.error('Canvas or video not available');
      return;
    }

    const resizeCanvas = debounce(() => {
      const parent = canvas.parentElement;
      if (parent && video.videoWidth && video.videoHeight) {
        const aspectRatio = video.videoWidth / video.videoHeight;
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;
        if (parentWidth / aspectRatio > parentHeight) {
          canvas.width = parentHeight * aspectRatio;
          canvas.height = parentHeight;
        } else {
          canvas.width = parentWidth;
          canvas.height = parentWidth / aspectRatio;
        }
      }
    }, 100);

    window.addEventListener('resize', resizeCanvas);

    let lastFrameTime = 0;
    const fps = 30;

    const draw = (timestamp: number) => {
      if (!canvas || !ctx || !video || video.paused || video.ended) return;

      const timeSinceLastFrame = timestamp - lastFrameTime;
      if (timeSinceLastFrame >= 1000 / fps) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        lastFrameTime = timestamp;
      }

      requestAnimationFrame(draw);
    };

    const onPlay = () => {
      resizeCanvas();
      requestAnimationFrame(draw);
    };

    const onEnded = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      isSecretPageEnabled.value = false;
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('ended', onEnded);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('ended', onEnded);
    };
  });

  return isSecretPageEnabled.value ? (
    <div
      onClick={handleUserInteraction}
      className="relative w-full h-screen max-w-screen-lg mx-auto"
    >
      <video
        ref={videoRef}
        src="/videos/secret.mp4"
        autoPlay
        playsInline
        onCanPlay={() => {
          if (videoRef.current && videoRef.current.paused)
            videoRef.current.play();
        }}
        className="hidden"
      />
      <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />
    </div>
  ) : (
    <NotFound />
  );
};

export default Secret;
