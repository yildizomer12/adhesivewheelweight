'use client';

import { Zap, Battery, Award, Maximize } from 'lucide-react';
// Removed useTranslations and TranslationKeys imports

type Advantage = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export function TechnologyAdvantages() {
  // Removed useTranslations hook call

  // Updated advantages array with hardcoded English strings
  const advantages: Advantage[] = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Production Speed",
      description: "4-8 times faster than traditional presses with continuous operation and automatic feeding system."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energy Efficiency",
      description: "83,300 pieces/kWh vs competitor's 20,800 pieces/kWh, smaller motor requirements and lower operating costs."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Superior Quality",
      description: "Burr-free cutting, clear marking, and precise weight control for optimal performance."
    },
    {
      icon: <Maximize className="h-8 w-8" />,
      title: "Space Efficiency",
      description: "Compact design with vibration-free operation and flexible installation options."
    }
  ];

  // Removed console.log

  return (
    <section id="technology" className="py-20 bg-[#e6f0f7]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#cfe2ee] text-[#0065A1]">
            Technology {/* Hardcoded */}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Revolutionary Rotary Punch Technology {/* Hardcoded */}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Superior Performance through Innovation {/* Hardcoded */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            // Use direct strings from the updated array
            const title = advantage.title;
            const description = advantage.description;

            return (
              <div
                key={index}
                className="p-8 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px] shadow-lg hover:shadow-xl bg-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f0f7] text-[#0065A1] mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
