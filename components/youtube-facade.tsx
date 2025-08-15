'use client';

import { useState, useCallback } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  start?: number;
  quality?: string;
  onVideoStateChange?: (isPlaying: boolean) => void;
}

export function YouTubeFacade({
  videoId,
  title,
  className = '',
  autoplay = true,
  muted = true,
  controls = false,
  loop = true,
  start = 0,
  quality = 'hd1080',
  onVideoStateChange
}: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.webp`;
  
  const getEmbedUrl = useCallback(() => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      controls: controls ? '1' : '0',
      disablekb: '1',
      fs: '0',
      loop: loop ? '1' : '0',
      modestbranding: '1',
      playsinline: '1',
      rel: '0',
      showinfo: '0',
      start: start.toString(),
      playlist: loop ? videoId : '',
      hd: '1',
      vq: quality,
      quality: quality,
      highQuality: '1',
      enablejsapi: '1',
      origin: typeof window !== 'undefined' ? window.location.origin : ''
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId, autoplay, muted, controls, loop, start, quality]);

  const handleLoadVideo = useCallback(() => {
    setIsLoaded(true);
    setIsPlaying(true);
    onVideoStateChange?.(true);
  }, [onVideoStateChange]);

  if (isLoaded) {
    return (
      <iframe
        className={className}
        src={getEmbedUrl()}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="eager"
        width="1920"
        height="1080"
      />
    );
  }

  return (
    <div 
      className={`${className} relative cursor-pointer group`}
      onClick={handleLoadVideo}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
        quality={75}
        priority
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg">
          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
        </div>
      </div>
      
      {/* Video title overlay */}
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-sm opacity-90">{title}</p>
      </div>
    </div>
  );
}
