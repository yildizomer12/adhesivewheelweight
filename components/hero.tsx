'use client';

import { Play, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef, useCallback } from 'react';
import { VideoModal } from './video-modal';
import { QuoteDialog } from './quote-dialog';
import { usePathname } from 'next/navigation';
import { DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

export function Hero() {
  const pathname = usePathname();
  const isChoppingPage = pathname?.endsWith('/chopping-and-marking-machine') ?? false;
  const isTapingPage = pathname?.endsWith('/taping-and-packaging-machine') ?? false;
  const isWirePage = pathname?.endsWith('/wire-flattening-machine') ?? false;
  const isDecoilerPage = pathname?.endsWith('/decoiler-machine') ?? false;
  const isWheelWeightsPage = pathname?.endsWith('/wheel-weights') ?? false;
  const isFaqPage = pathname?.endsWith('/faq') ?? false;
  const isRotaryPunchPage = pathname?.endsWith('/rotary-punch') ?? false;
  const isAboutPage = pathname?.endsWith('/about-us') ?? false;
  const isBlogPage = pathname?.endsWith('/blogs') ?? false;
  const isProductPage = (isChoppingPage || isTapingPage || isWirePage || isDecoilerPage || isWheelWeightsPage) && 
    !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBackgroundVideoPlaying, setIsBackgroundVideoPlaying] = useState(!isWirePage);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const backgroundVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load video immediately for better user experience
    setShouldLoadVideo(true);
  }, []);

  const handleVideoStateChange = useCallback((isPlaying: boolean) => {
    if (isWirePage) return;
    
    setIsBackgroundVideoPlaying(isPlaying);
  }, [isWirePage]);

  const getVideoId = () => {
    if (isChoppingPage) return "6exCLLHulhU";
    if (isTapingPage) return "Kk1yIkIKUMQ";
    if (isWirePage) return "CUrBRxySXI8";
    if (isDecoilerPage) return "iaVqUmbvuHM";
    if (isWheelWeightsPage) return "CUrBRxySXI8";
    return "CUrBRxySXI8";
  };

  const getThumbnailUrl = (videoId: string, quality: 'maxres' | 'hq' | 'mq' = 'maxres') => {
    const qualities = {
      maxres: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      hq: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      mq: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`
    };
    return qualities[quality];
  };

  const getOptimizedYouTubeUrl = (videoId: string) => {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      controls: '0',
      disablekb: '1',
      fs: '0',
      loop: '1',
      modestbranding: '1',
      playsinline: '1',
      rel: '0',
      showinfo: '0',
      playlist: videoId,
      hd: '1',
      vq: 'hd1080',
      quality: 'hd1080',
      highQuality: '1',
      enablejsapi: '1',
      origin: typeof window !== 'undefined' ? window.location.origin : ''
    });
    return `https://www.youtube.com/embed/${videoId}?${params}`;
  };

  const getHeroTranslations = () => {
    if (isChoppingPage) {
      return {
        tag: "Wheel Weights Chopping and Marking Machine",
        title: "High-Speed Wheel Weight Production Machine",
        description: "Achieve unmatched production speeds of 100,000 pieces per hour with our advanced rotary punch technology",
      };
    }
    if (isTapingPage) {
      return {
        tag: "Wheel Weights Taping and Packaging Machine",
        title: "High-Precision Automated Production",
        description: "Transform raw wheel weights into perfectly taped and packaged products with our integrated system capable of processing 90 kg per hour",
      };
    }
    if (isWirePage) {
      return {
        tag: "Wire Flattening Machine",
        title: "Transform Your Production Economics",
        description: "Convert standard 8mm wire rod into precise 11.5 x 3mm flat steel, reducing raw material costs by up to 50% while streamlining your production process",
      };
    }
    if (isDecoilerPage) {
      return {
        tag: "Decoiler Machine",
        title: "Comprehensive Decoiling Solutions",
        description: "Experience superior coil processing with our comprehensive range of decoiler machines, featuring capacities from 300kg to 10,000kg. Advanced technology meets precision engineering for optimal material handling across all industries.",
      };
    }
    if (isWheelWeightsPage) {
      return {
        tag: "Wheel Weights",
        title: "High-Performance Adhesive Wheel Weights for Professional Tire Services",
        description: "Discover industry-leading wheel weights with superior adherence, galvanized coating, and precise weight accuracy of ±0.5g. Manufactured using advanced Rotary Punch technology for consistent quality and performance.",
      };
    }
    if (isRotaryPunchPage) {
      return {
        title: "Rotary Punch Technology"
      };
    }
    if (isAboutPage) {
      return {
        title: "About YILSA"
      };
    }
    if (isBlogPage) {
      return {
        title: "Blog"
      };
    }
    if (isFaqPage) {
      return {
        title: "Frequently Asked Questions",
      };
    }
    // Default/Home page
    return {
      tag: "Industry Leading Manufacturing Equipment",
      title: "Transform Your Wheel Weights Production",
      description: "Leading the wheel weights industry with cutting-edge rotary punch technology and integrated production solutions. Our complete manufacturing systems deliver unmatched efficiency, precision, and ROI.",
    };
  };

  const heroContent = getHeroTranslations();

  const stats = [
    { value: '100,000', label: "pcs/hour production capacity" },
    { value: '%50', label: "raw material saving" },
    { value: '±0.5g', label: "weight accuracy" },
    { value: '83,300', label: "pcs/kWh energy efficiency" },
    { value: '10+', label: "years industry experience" }
  ];

  return (
    <>
      <div className="h-16 bg-white w-full"></div>
      {/* Mobile Only Video/Image Section */}
      <div className="relative md:hidden overflow-hidden bg-black">
        <div className="w-full aspect-video">
          {isWirePage ? (
            <img
              src="/images/production-line-extended.webp"
              alt="Production Line"
              className="w-full h-full object-cover"
            />
          ) : isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? (
            <img
              src={isFaqPage ? "/images/faq_background.webp" :
                  isRotaryPunchPage ? "/images/common-background.webp" :
                  isAboutPage ? "/images/common-background.webp" :
                  "/images/common-background.webp"}
              alt={isFaqPage ? "FAQ Background" :
                  isRotaryPunchPage ? "Technology Background" :
                  isAboutPage ? "About Background" :
                  "Blog Background"}
              className="w-full h-full object-cover brightness-[0.4]"
            />
          ) : (
            <div className="w-full h-full hero-video-container">
              {shouldLoadVideo ? (
                <iframe
                  className="w-full h-full pointer-events-none"
                  src={getOptimizedYouTubeUrl(getVideoId())}
                  title={isChoppingPage ? "Chopping and Marking Machine" : isTapingPage ? "Taping and Packaging Machine" : "Wheel Weights Production"}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => setIsVideoLoaded(true)}
                  style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
                />
              ) : null}
              {!isVideoLoaded && (
                <Image
                  src={getThumbnailUrl(getVideoId(), 'hq')}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  priority
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = getThumbnailUrl(getVideoId(), 'mq');
                  }}
                  style={{ opacity: isVideoLoaded ? 0 : 1, transition: 'opacity 0.3s ease-out' }}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Hero Section */}
      <div className={`relative min-h-fit ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'md:min-h-[20vh]' : isProductPage ? 'md:min-h-[50vh]' : 'md:min-h-[80vh]'} max-h-fit overflow-hidden bg-black`}>
        {/* Desktop Only Background Video/Image */}
        <div className="hidden md:block">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden hero-video-container">
              {isWirePage ? (
                <img
                  src="/images/production-line-extended.webp"
                  alt="Production Line"
                  className="absolute w-full h-full object-cover"
                />
              ) : isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? (
                <img
                  src={isFaqPage ? "/images/faq_background.webp" :
                      isRotaryPunchPage ? "/images/common-background.webp" :
                      isAboutPage ? "/images/common-background.webp" :
                      "/images/common-background.webp"}
                  alt={isFaqPage ? "FAQ Background" :
                      isRotaryPunchPage ? "Technology Background" :
                      isAboutPage ? "About Background" :
                      "Blog Background"}
                  className="absolute w-full h-full object-cover brightness-[0.4]"
                />
              ) : (
                <>
                  {shouldLoadVideo ? (
                    <iframe
                      ref={backgroundVideoRef}
                      className="absolute w-[130%] h-[130%] scale-[1.75] origin-center transform-gpu"
                      src={getOptimizedYouTubeUrl(getVideoId())}
                      title={isChoppingPage ? "Chopping and Marking Machine" : isTapingPage ? "Taping and Packaging Machine" : "Wheel Weights Production"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      width="1920"
                      height="1080"
                      onLoad={() => setIsVideoLoaded(true)}
                      style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
                    />
                  ) : null}
                  {!isVideoLoaded && (
                    <Image
                      src={getThumbnailUrl(getVideoId(), 'maxres')}
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                      priority
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = getThumbnailUrl(getVideoId(), 'hq');
                      }}
                      style={{ opacity: isVideoLoaded ? 0 : 1, transition: 'opacity 0.3s ease-out' }}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Text Content Area */}
        <div className={`relative z-20 flex items-center justify-center min-h-fit ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'md:min-h-[20vh]' : isProductPage ? 'md:min-h-[50vh]' : 'md:min-h-[80vh]'} max-h-fit`}>
          <div className="text-center px-6 pt-8 pb-4 md:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                { !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
                  <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-white/10 text-white">
                    {heroContent.tag}
                  </span>
                )}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                  {heroContent.title}
                </h1>
                { !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
                  <>
                    <p className="text-lg leading-relaxed text-white/90">
                      {heroContent.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                      {isProductPage ? (
                        <>
                          <QuoteDialog>
                            <DialogTrigger asChild>
                              <Button
                                variant={'default'}
                                className="gap-2 bg-white text-black hover:bg-white/90"
                              >
                                <FileText className="w-4 h-4" />
                                Get Quote
                              </Button>
                            </DialogTrigger>
                          </QuoteDialog>
                          {!isWirePage && (
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 gap-2 border border-white text-white hover:bg-white/10"
                              onClick={() => setIsModalOpen(true)}
                            >
                              <Play className="w-4 h-4" />
                              Watch Playlist
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 gap-2 bg-transparent border border-white text-white hover:bg-white/10"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <Play className="w-4 h-4" />
                            Watch Playlist
                          </button>
                          <Button
                            variant={'outline'}
                            className="gap-2 bg-white text-black hover:bg-white/90"
                          >
                            <Calculator className="w-4 h-4" />
                            Calculate ROI
                          </Button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Stats Section */}
            {!isProductPage && !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
              <div className="max-w-5xl mx-auto mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/20 hover:border-white/80 hover:bg-white/10 transition-all duration-700">
                      <div className="text-3xl font-bold mb-2 text-center text-white">{stat.value}</div>
                      <div className="text-sm font-medium text-center text-white/90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onVideoStateChange={handleVideoStateChange}
        />
      </div>
    </>
  );
}
