"use client";

import { useState, useCallback } from 'react';
import { Play } from 'lucide-react';

interface LazyYouTubeProps {
  videoId: string;
  title?: string;
  className?: string;
  thumbnailQuality?: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  start?: number;
  end?: number;
  playlist?: string;
  modestbranding?: boolean;
  rel?: boolean;
  showinfo?: boolean;
  enablejsapi?: boolean;
  origin?: string;
}

export function LazyYouTube({
  videoId,
  title = 'YouTube Video',
  className = '',
  thumbnailQuality = 'hqdefault',
  autoplay = false,
  muted = false,
  controls = true,
  loop = false,
  start,
  end,
  playlist,
  modestbranding = true,
  rel = false,
  showinfo = false,
  enablejsapi = false,
  origin,
}: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const buildEmbedUrl = () => {
    const params = new URLSearchParams();
    
    if (autoplay) params.set('autoplay', '1');
    if (muted) params.set('mute', '1');
    if (!controls) params.set('controls', '0');
    if (loop) {
      params.set('loop', '1');
      params.set('playlist', playlist || videoId);
    }
    if (start) params.set('start', start.toString());
    if (end) params.set('end', end.toString());
    if (modestbranding) params.set('modestbranding', '1');
    if (!rel) params.set('rel', '0');
    if (!showinfo) params.set('showinfo', '0');
    if (enablejsapi) params.set('enablejsapi', '1');
    if (origin) params.set('origin', origin);

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  if (isLoaded) {
    return (
      <iframe
        className={`w-full h-full ${className}`}
        src={buildEmbedUrl()}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <div 
      className={`relative w-full h-full cursor-pointer group ${className}`}
      onClick={handleLoad}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLoad();
        }
      }}
      aria-label={`Load ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full p-4 group-hover:scale-110 transform transition-transform">
          <Play className="w-8 h-8 text-white fill-current ml-1" />
        </div>
      </div>
      
      {/* Video title overlay */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white text-sm font-medium">{title}</p>
        </div>
      )}
    </div>
  );
}
