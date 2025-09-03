'use client';

import { useEffect, useRef, useState } from 'react';

interface YouTubeOptimizerProps {
  videoId: string;
  className?: string;
  title?: string;
  autoplay?: boolean;
  modestbranding?: boolean;
  controls?: boolean;
}

export function YouTubeOptimizer({
  videoId,
  className = '',
  title = "YouTube video player",
  autoplay = false,
  modestbranding = true,
  controls = false
}: YouTubeOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Small delay to ensure smooth loading
          setTimeout(() => setIsLoaded(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getYouTubeUrl = () => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: autoplay ? '1' : '0',
      modestbranding: modestbranding ? '1' : '0',
      controls: controls ? '1' : '0',
      rel: '0',
      showinfo: '0',
      enablejsapi: '1',
      origin: typeof window !== 'undefined' ? window.location.origin : ''
    });

    return `https://www.youtube.com/embed/${videoId}?${params}`;
  };

  return (
    <div ref={containerRef} className={`youtube-container ${className}`}>
      {!isLoaded && (
        <div className="youtube-placeholder">
          <div className="youtube-loading">
            <div className="youtube-play-icon">▶</div>
          </div>
        </div>
      )}
      
      {isIntersecting && (
        <iframe
          className={`youtube-iframe ${isLoaded ? 'loaded' : 'loading'}`}
          src={isLoaded ? getYouTubeUrl() : undefined}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
            display: isLoaded ? 'block' : 'none'
          }}
        />
      )}
    </div>
  );
}
