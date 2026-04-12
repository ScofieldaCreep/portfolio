import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const Video = ({ video, image, active }: { video?: string; image?: string; active: boolean }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);

  if (image) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl overflow-hidden">
        <img
          src={image}
          alt=""
          className={cn('h-full w-full object-cover rounded-3xl', active ? '' : 'grayscale')}
        />
      </div>
    );
  }

  if (video) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
        <video
          src={video}
          ref={videoRef}
          loop={active}
          muted
          className={cn('h-full w-full object-cover rounded-3xl', active ? '' : 'grayscale')}
        />
      </div>
    );
  }

  // Fallback: colored background with description
  return (
    <div
      className={cn(
        'absolute top-0 left-0 right-0 bottom-0 rounded-3xl',
        'bg-gradient-to-br from-blue-joust/20 to-green-benzol/20',
        'flex items-center justify-center',
        active ? '' : 'grayscale'
      )}
    >
      <div className="text-center px-8">
        <p className="text-4xl font-bold text-primary-foreground mb-2">Coming Soon</p>
        <p className="text-secondary-foreground">Visit the project link for details</p>
      </div>
    </div>
  );
};

export default Video;
