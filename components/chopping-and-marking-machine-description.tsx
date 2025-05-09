'use client';

import React from 'react';
// Removed useTranslations import

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 mt-1">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-red-500 mt-1">
    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const RotaryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#0065A1]">
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.828-7.172l-2.828 2.828m-6.344 6.344l-2.828 2.828m0-12l2.828 2.828m6.344 6.344l2.828 2.828" />
  </svg>
);

const PressIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-gray-600">
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3m4-2H8a2 2 0 00-2 2v12" />
  </svg>
);

export function ChoppingAndMarkingMachineDescription() {
  // Removed useTranslations hook call

  return (
    <div>
      {/* Technology Comparison Section */}
      <section className="w-full bg-white pt-16 pb-6">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                Technology Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced Technology vs Traditional Methods
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Rotary Punch Technology */}
              <div className="bg-white rounded-xl shadow-lg shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center">
                    <RotaryIcon />
                  </div>
                  <h3 className="text-xl font-semibold">Rotary Punch Technology</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>100,000 pieces/hour production speed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>83,300 pieces/kWh energy efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>Continuous rotary motion for smooth operation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>Self-feeding mechanism</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span>Burr-free, precise cuts</span>
                  </li>
                </ul>
              </div>

              {/* Traditional Press Systems */}
              <div className="bg-gray-50 rounded-xl shadow-lg shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <PressIcon />
                  </div>
                  <h3 className="text-xl font-semibold">Traditional Press Systems</h3>
                </div>

                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <MinusIcon />
                    <span>25,000 pieces/hour production speed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusIcon />
                    <span>20,800 pieces/kWh energy efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusIcon />
                    <span>Intermittent motion causing vibration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusIcon />
                    <span>Requires external feeding unit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusIcon />
                    <span>Burrs and cutting angle distortion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 bg-[#e6f0f7] rounded-xl shadow-xl">
                  <div className="text-4xl font-bold text-[#0065A1] mb-2">
                    4x
                  </div>
                  <div className="text-gray-600">
                    Faster Production
                  </div>
                </div>
                <div className="text-center p-6 bg-[#e6f0f7] rounded-xl shadow-xl">
                  <div className="text-4xl font-bold text-[#0065A1] mb-2">
                    80%
                  </div>
                  <div className="text-gray-600">
                    Energy Savings
                  </div>
                </div>
                <div className="text-center p-6 bg-[#e6f0f7] rounded-xl shadow-xl">
                  <div className="text-4xl font-bold text-[#0065A1] mb-2">
                    0%
                  </div>
                  <div className="text-gray-600">
                    Material Waste
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="w-full bg-white pt-10 pb-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                Product Description
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Core of Your Production Line
              </h2>
            </div>
            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                The Wheel Weights Chopping and Marking Machine stands as the cornerstone of efficient wheel weight manufacturing. As the central component in the production line, it transforms raw material into precisely cut and clearly marked weights, setting the foundation for all subsequent processing steps.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
              <img
                src="/images/production-line-highlight.bmp"
                alt="Complete wheel weight production line with highlighted Chopping and Marking Machine"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Advanced Operation System
              </h3>
              <p className="text-gray-600">
                The machine's dual-drum design incorporates both cutting and marking functions in a single, streamlined process. While the primary drums handle precise cutting without material waste, the integrated marking drums simultaneously imprint weight values and brand information with exceptional clarity. This synchronized operation ensures consistent quality across high-volume production runs.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Superior Production Benefits
              </h3>
              <p className="text-gray-600">
                The rotary punch technology delivers three key advantages over traditional press systems:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Energy efficiency: Consuming just 1.37 kWh per 100,000 pieces, representing an 80% reduction in energy usage</li>
                <li>Quality consistency: Produces burr-free cuts with clear markings through continuous rotational force</li>
                <li>Space optimization: Compact design with vertical punch mechanism requires minimal floor space while maintaining maximum output</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Integration & Automation
              </h3>
              <p className="text-gray-600">
                The machine seamlessly connects with both upstream wire flattening and downstream taping processes. Its self-feeding mechanism eliminates the need for additional feeding units, while the precision-controlled output ensures smooth transition to subsequent processing stages. The entire system is managed through an advanced Delta PLC control system with a 7" display interface, enabling real-time monitoring and adjustment of production parameters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
