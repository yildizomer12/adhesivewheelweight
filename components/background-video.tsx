'use client';

import { OptimizedYouTube } from './optimized-youtube';

interface BackgroundVideoProps {
  videoId: string;
}

export function BackgroundVideo({ videoId }: BackgroundVideoProps) {
  return (
    <div className="fixed inset-0 w-full h-full">
      <OptimizedYouTube
        videoId={videoId}
        autoplay={true}
        mute={true}
        loop={true}
        controls={false}
        modestbranding={true}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
