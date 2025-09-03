'use client';

import { useEffect, useState } from 'react';

interface OptimizedYouTubeProps {
  videoId: string;
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
  controls?: boolean;
  modestbranding?: boolean;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function OptimizedYouTube({
  videoId,
  autoplay = true,
  mute = true,
  loop = true,
  controls = false,
  modestbranding = true,
  className = '',
  loading = 'lazy'
}: OptimizedYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Small delay to ensure the component is in view
          setTimeout(() => setIsLoaded(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`#youtube-${videoId}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [videoId]);

  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: mute ? '1' : '0',
    loop: loop ? '1' : '0',
    controls: controls ? '1' : '0',
    modestbranding: modestbranding ? '1' : '0',
    rel: '0',
    showinfo: '0',
    enablejsapi: '1',
    playsinline: '1',
    origin: typeof window !== 'undefined' ? window.location.origin : ''
  });

  if (loop) {
    params.set('playlist', videoId);
  }

  return (
    <div id={`youtube-${videoId}`} className={className}>
      {isIntersecting && (
        <iframe
          className="w-full h-full"
          src={isLoaded ? `https://www.youtube.com/embed/${videoId}?${params}` : undefined}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading={loading}
          style={{
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
}
