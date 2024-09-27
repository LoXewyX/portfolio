import { useRef } from 'preact/hooks';
import { useSignalEffect } from '@preact/signals';
import { isSecretPageEnabled } from '../helpers/secret';
import NotFound from './404';

const Secret: preact.FunctionComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUserInteraction = () => {
    const video = videoRef.current;
    if (video && video.paused) video.play();
  };

  useSignalEffect(() => {
    const video = videoRef.current;

    if (!video) {
      console.error('Video not available');
      return;
    }

    const onEnded = () => (isSecretPageEnabled.value = false);

    video.addEventListener('ended', onEnded);
    return () => video.removeEventListener('ended', onEnded);
  });

  return isSecretPageEnabled.value ? (
    <div
      onClick={handleUserInteraction}
      className="flex items-center justify-center h-screen"
    >
      <video
        ref={videoRef}
        src="/videos/secret.mp4"
        className="w-full h-auto max-w-screen-lg"
        autoPlay
        playsInline
        onCanPlay={() => {
          if (videoRef.current && videoRef.current.paused)
            videoRef.current.play();
        }}
      />
    </div>
  ) : (
    <NotFound />
  );
};

export default Secret;
