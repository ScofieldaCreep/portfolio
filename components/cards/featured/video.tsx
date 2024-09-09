import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const Video = ({ video, active }: { video: string; active: boolean }) => {
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
  return (
    // absolute 定位是相对于最近的已定位祖先元素进行定位。
    // 1. Video 组件的 absolute 定位会相对于其父元素（使用 relative 定位的 div）进行定位。
    // 2. top-0 left-0 right-0 bottom-0 的设置使得 Video 组件完全填充其父容器。
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
};

export default Video;
