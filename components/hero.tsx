'use client';

import { Play, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { VideoModal } from './video-modal';
import { QuoteDialog } from './quote-dialog';
import { YouTubeFacade } from './youtube-facade';
import Image from 'next/image';
// Imports removed
import { usePathname } from 'next/navigation';
import { DialogTrigger } from '@/components/ui/dialog';

export function Hero() {
  // Hook calls removed
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

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBackgroundVideoPlaying, setIsBackgroundVideoPlaying] = useState(!isWirePage);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const backgroundVideoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isWirePage) {
      const timer = setTimeout(() => {
        setIsVideoReady(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setIsVideoReady(true);
    }
  }, [isWirePage]);

  const handleVideoStateChange = (isPlaying: boolean) => {
    if (isWirePage) return;
    
    setIsBackgroundVideoPlaying(isPlaying);

    if (backgroundVideoRef.current?.contentWindow) {
      try {
        backgroundVideoRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: isPlaying ? 'playVideo' : 'pauseVideo'
          }),
          '*'
        );
      } catch (error) {
        console.error('Error controlling background video:', error);
      }
    }
  };

  const getBackgroundVideo = () => {
    if (isChoppingPage) {
      return "https://www.youtube.com/embed/6exCLLHulhU?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=6&playlist=6exCLLHulhU&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isTapingPage) {
      return "https://www.youtube.com/embed/Kk1yIkIKUMQ?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=33&playlist=Kk1yIkIKUMQ&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isWirePage) {
      return "https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0&playlist=CUrBRxySXI8&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isDecoilerPage) {
      return "https://www.youtube.com/embed/iaVqUmbvuHM?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0&playlist=iaVqUmbvuHM&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    if (isWheelWeightsPage) {
      return "https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=144&playlist=CUrBRxySXI8&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
    }
    return "https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=144&playlist=CUrBRxySXI8&hd=1&vq=hd1080&quality=hd1080&highQuality=1&enablejsapi=1&origin=https://wheelweights.yilsamakine.com";
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
        tag: "Wire Flattening Machine", // Using title as tag for wire page
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
      {/* Mobile Only Video/Image Section - Hidden as requested */}
      <div className={`relative md:hidden transition-opacity duration-700 ${isWirePage || isVideoReady || isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
        <div className="w-full aspect-video"> {/* Maintain aspect ratio */}
          {isWirePage ? (
            <Image
              src="/images/production-line.jpg"
              alt="Production Line"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              quality={85}
            />
          ) : isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? (
            <Image
              src={isFaqPage ? "/images/faq_background.jpg" :
                  isRotaryPunchPage ? "/images/technology-background.jpg" :
                  isAboutPage ? "/images/about-background.jpg" :
                  "/images/blog-background.jpg"}
              alt={isFaqPage ? "FAQ Background" :
                  isRotaryPunchPage ? "Technology Background" :
                  isAboutPage ? "About Background" :
                  "Blog Background"}
              fill
              className="object-cover brightness-[0.8]"
              sizes="100vw"
              priority
              quality={85}
            />
          ) : (
            <iframe
              className="w-full h-full pointer-events-none" // Adjust size for mobile container, disable clicks
              src={getBackgroundVideo()} // Use original params: autoplay, mute, loop, controls=0, showinfo=0
              title={isChoppingPage ? "Chopping and Marking Machine" : isTapingPage ? "Taping and Packaging Machine" : "Wheel Weights Production"}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="eager"
            />
          )}
        </div>
      </div>

      {/* Main Hero Section (Text Content + Desktop Background) */}
      <div className={`relative min-h-fit ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'md:min-h-[20vh]' : isProductPage ? 'md:min-h-[50vh]' : 'md:min-h-[80vh]'} max-h-fit transition-colors duration-700 overflow-hidden bg-gradient-to-b from-[#EEF2F6] to-white`}>
        {/* Desktop Only Background Video/Image */}
        <div className={`hidden md:block transition-opacity duration-700 ${isWirePage || isVideoReady || isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 w-full h-full">
            <div className={`absolute inset-0 bg-black/30 z-10`}></div>
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {isWirePage ? (
                <Image
                  src="/images/production-line.jpg"
                  alt="Production Line"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                  quality={85}
                />
              ) : isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? (
                <Image
                  src={isFaqPage ? "/images/faq_background.jpg" :
                      isRotaryPunchPage ? "/images/technology-background.jpg" :
                      isAboutPage ? "/images/about-background.jpg" :
                      "/images/blog-background.jpg"}
                  alt={isFaqPage ? "FAQ Background" :
                      isRotaryPunchPage ? "Technology Background" :
                      isAboutPage ? "About Background" :
                      "Blog Background"}
                  fill
                  className="object-cover brightness-[0.4]"
                  sizes="100vw"
                  priority
                  quality={85}
                />
              ) : (
                <iframe
                  ref={backgroundVideoRef}
                  className="absolute w-[130%] h-[130%] scale-[1.75] origin-center transform-gpu"
                  src={getBackgroundVideo()}
                  title={isChoppingPage ? "Chopping and Marking Machine" : isTapingPage ? "Taping and Packaging Machine" : "Wheel Weights Production"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                  width="1920"
                  height="1080"
                />
              )}
            </div>
          </div>
        </div>

        {/* Text Content Area */}
        {/* Removed padding from container, applying to inner content wrapper */}
        {/* Further adjusting vertical padding for mobile, reducing bottom padding */}
        <div className={`relative z-20 flex items-center justify-center min-h-fit ${isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'md:min-h-[20vh]' : isProductPage ? 'md:min-h-[50vh]' : 'md:min-h-[80vh]'} max-h-fit`}>
          {/* Changed py-8 to pt-8 pb-4 for finer control on mobile, keeping md:py-16 */}
          <div className="text-center px-6 pt-8 pb-4 md:py-16">
            {/* Padding applied to parent div */}
            <div className="max-w-3xl mx-auto">
              {/* Removed padding from h1 */}
              <div className="space-y-6">
                { !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
                  <span className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full transition-colors duration-700 bg-[#cfe2ee] text-[#0065A1] ${isWirePage || isVideoReady ? 'md:bg-white/10 md:text-white' : ''}`}>
                    {heroContent.tag}
                  </span>
                )}
                {/* Removed whitespace-nowrap condition to allow wrapping on all pages */}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight transition-colors duration-700 text-gray-900 ${isWirePage || isVideoReady || isFaqPage || isRotaryPunchPage || isAboutPage || isBlogPage ? 'md:text-white' : ''}`}>
                  {heroContent.title}
                </h1>
                { !isFaqPage && !isRotaryPunchPage && !isAboutPage && !isBlogPage && (
                  <>
                    <p className={`text-lg leading-relaxed transition-colors duration-700 text-gray-600 ${isWirePage || isVideoReady ? 'md:text-white/90' : ''}`}>
                      {heroContent.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                      {isProductPage ? (
                        <>
                          <QuoteDialog>
                            <DialogTrigger asChild>
                              <Button
                                variant={'default'}
                                className={`gap-2 transition-colors duration-700 ${isWirePage || isVideoReady ? 'md:bg-white md:text-black md:hover:bg-white/90' : ''}`}
                              >
                                <FileText className="w-4 h-4" />
                                Get Quote
                              </Button>
                            </DialogTrigger>
                          </QuoteDialog>
                          {!isWirePage && (
                            <button
                              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 gap-2 transition-colors duration-700 ${isVideoReady ? 'border border-white text-white hover:bg-white/10' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'}`}
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
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 gap-2 transition-colors duration-700 bg-primary text-primary-foreground hover:bg-primary/90 ${isVideoReady ? 'md:bg-transparent md:border md:border-white md:text-white md:hover:bg-white/10' : ''}`}
                            onClick={() => setIsModalOpen(true)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-4 h-4"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                            Watch Playlist
                          </button>
                          <Button
                            variant={'outline'}
                            className={`gap-2 transition-colors duration-700 ${isVideoReady ? 'md:bg-white md:text-black md:hover:bg-white/90' : ''}`}
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
                    <div key={index} className={`p-6 rounded-xl transition-all duration-700 bg-white shadow-lg hover:shadow-xl ${
                      isVideoReady
                        ? 'md:border md:border-white/20 md:hover:border-white/80 md:bg-white/5 md:hover:bg-white/10'
                        : ''
                    }`}>
                      <div className={`text-3xl font-bold mb-2 transition-colors duration-700 text-center text-gray-900 ${
                        isVideoReady ? 'md:text-white' : ''
                      }`}>{stat.value}</div>
                      <div className={`text-sm font-medium transition-colors duration-700 text-center text-gray-500 ${
                        isVideoReady ? 'md:text-white/90' : ''
                      }`}>{stat.label}</div>
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
