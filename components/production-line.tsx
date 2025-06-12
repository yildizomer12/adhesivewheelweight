'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react';
// Removed useTranslations import
import { useRouter } from 'next/navigation'; // Removed useParams
// Removed ProductKey type

// Updated products array with hardcoded English strings
const products: { title: string; image: string; features: string[]; route: string }[] = [
  {
    title: "Decoiler Machine",
    image: "/images/decoiler-machine.png",
    features: [
      "2000 kg coil capacity",
      "Hydraulic mandrel system",
      "Advanced tension control"
    ],
    route: "decoiler-machine"
  },
  {
    title: "Wire Flattening Machine",
    image: "/images/wire-flattening-machine.png",
    features: [
      "Direct M8 wire processing",
      "11.5 x 3 mm output",
      "50% raw material cost reduction"
    ],
    route: "wire-flattening-machine"
  },
  {
    title: "Chopping and Marking Machine",
    image: "/images/chopping-marking-machine.png",
    features: [
      "100,000 pcs/hour capacity",
      "Rotary punch technology",
      "Precision marking system"
    ],
    route: "chopping-and-marking-machine"
  },
  {
    title: "Taping and Packaging Machine",
    image: "/images/taping-packaging-machine.png",
    features: [
      "5g+5g and 5g+10g configurations",
      "Real-time monitoring",
      "15 boxes/hour output"
    ],
    route: "taping-and-packaging-machine"
  },
  {
    title: "Wheel Weights Production",
    image: "/images/wheel-weights.png",
    features: [
      "Self-adhesive with galvanized coating",
      "Weight accuracy: ±0.5g per strip",
      "Available in 5g and 10g combinations"
    ],
    route: "wheel-weights"
  }
];

export function ProductionLine() {
  const router = useRouter();
  // Removed lang and t variables
  const [isLoaded, setIsLoaded] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: false,
    align: 'start',
    slidesToScroll: 1
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }
  }, [emblaApi]);

  const resetAutoplay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsManualControl(false);
    }, 1000);
  }, []);

  const scrollPrev = useCallback(() => {
    setIsManualControl(true);
    if (emblaApi) emblaApi.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    setIsManualControl(true);
    if (emblaApi) emblaApi.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const handleMouseDown = useCallback(() => {
    setIsManualControl(true);
    resetAutoplay();
  }, [resetAutoplay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container py-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
            Complete Solution {/* Hardcoded */}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Wheel Weight Production Line {/* Hardcoded */}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From Raw Material to Finished Product - Integrated Production Solutions {/* Hardcoded */}
          </p>
        </div>

        <div className="relative py-4">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
            style={{ zIndex: 10 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
            style={{ zIndex: 10 }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobil Görünüm (Alt alta sıralı, kopyasız) */}
          <div className="block md:hidden">
            <div className={`flex flex-col ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
              {products.map((product, index) => (
                <div key={`mobile-${index}`} className="w-full mb-6 px-2"> {/* Mobil için alt boşluk ve padding */}
                  <div onClick={() => router.push(`/${product.route}`)} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] flex flex-col cursor-pointer h-full relative shadow-lg hover:shadow-xl"> {/* Removed lang */}
                    <div className="aspect-w-4 aspect-h-4 w-full relative">
                      <img
                        src={product.image}
                        alt={product.title} // Use direct string
                        className="w-full h-full object-contain bg-gray-100 p-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-4">{product.title}</h3> {/* Use direct string */}
                      <ul className="space-y-2 mb-6 flex-grow">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#0065A1] rounded-full mr-2"></span>
                            {feature} {/* Use direct string */}
                          </li>
                        ))}
                      </ul>
                      <button className="flex items-center justify-center w-full px-4 py-2 bg-[#e6f0f7] text-gray-700 rounded-md hover:bg-[#d9e7f2] transition-colors duration-200">
                        <span>Learn More</span> {/* Hardcoded */}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Masaüstü Görünüm (Carousel, kopyalı) */}
          <div className="hidden md:block embla relative">
            <div
              ref={emblaRef}
              className={`${isManualControl ? "" : "md:animate-carousel"} overflow-visible`}
              onMouseDown={handleMouseDown}
            >
              <div className={`flex flex-row ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                {[...products, ...products, ...products].map((product, index) => (
                  // Masaüstü: md:flex-[0_0_25%], md:px-4 md:py-4
                  <div key={`desktop-${index}`} className="md:flex-[0_0_25%] min-w-0 md:px-4 md:py-4">
                    <div onClick={() => router.push(`/${product.route}`)} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:z-[100] flex flex-col cursor-pointer h-full relative shadow-lg hover:shadow-xl"> {/* Removed lang */}
                      <div className="aspect-w-4 aspect-h-4 w-full relative">
                        <img
                          src={product.image}
                          alt={product.title} // Use direct string
                          className="w-full h-full object-contain bg-gray-100 p-4"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-4">{product.title}</h3> {/* Use direct string */}
                        <ul className="space-y-2 mb-6 flex-grow">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#0065A1] rounded-full mr-2"></span>
                              {feature} {/* Use direct string */}
                            </li>
                          ))}
                        </ul>
                        <button className="flex items-center justify-center w-full px-4 py-2 bg-[#e6f0f7] text-gray-700 rounded-md hover:bg-[#d9e7f2] transition-colors duration-200">
                          <span>Learn More</span> {/* Hardcoded */}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div> {/* End Desktop flex-row */}
            </div> {/* End Embla inner container */}
          </div> {/* End Desktop embla relative */}
        </div> {/* End Relative py-4 */}

        <style jsx>{`
          .embla {
            position: relative;
            z-index: 1;
            /* overflow: hidden; // Mobil için kaldırıldı */
            padding: 20px 0;
            margin: -20px 0;
          }

          .fixed-nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: none; /* Mobil için gizlendi */
            align-items: center;
            justify-content: center;
            color: #4A5568;
            transition: all 0.2s;
            cursor: pointer;
            border: none;
            outline: none;
          }

          .fixed-nav-button:hover {
            color: var(--accent);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .animate-carousel {
            animation: carousel 40s linear infinite;
          }
          
          /* Masaüstü stilleri */
          @media (min-width: 768px) {
            .embla {
              overflow: hidden; /* Masaüstünde overflow hidden */
            }
            .fixed-nav-button {
              display: flex; /* Masaüstünde göster */
            }
            .animate-carousel {
              /* Animasyon sınıfı JS ile md:animate-carousel olarak eklendi */
            }
          }

          .animate-carousel:hover {
            animation-play-state: paused;
          }

          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
