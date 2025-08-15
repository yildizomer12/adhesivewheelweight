'use client';

// Removed useTranslations import
import React from 'react'; // Added React import for JSX

export default function DecoilerMachineDescription() {
  // Removed useTranslations hook call

  return (
    <div>
      <section className="w-full bg-white pt-16 pb-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                Product Description
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                The Starting Point of Production
              </h2>
            </div>

            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                The Decoiler Machine marks the crucial first step in the wheel weight production line. It efficiently unwinds large coils of raw material, preparing it for subsequent processing stages like wire flattening and cutting. This initial stage is vital for ensuring a smooth and continuous flow throughout the entire manufacturing process.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
              <img
                src="/images/production-line-with-decoiler-machine.webp"
                alt="Production line"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Features & Design
              </h3>
              <p className="text-gray-600">
                Our Decoiler Machines are engineered for reliability and ease of use. They feature robust construction to handle various coil weights and sizes, along with precise control mechanisms to manage unwinding speed and tension. This ensures the material is fed consistently and without damage into the next stage of production.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Available Series
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Light Series: Ideal for smaller production scales and lighter coil materials.</li>
                <li>Medium Series: A versatile option balancing capacity and footprint for moderate production needs.</li>
                <li>Heavy Series: Designed for high-volume manufacturing, capable of handling large and heavy coils.</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Standard Equipment
              </h3>
              <p className="text-gray-600">
                Each Decoiler Machine comes equipped with standard features necessary for efficient operation, including safety guards, adjustable speed controls, and durable coil support systems. Optional upgrades may be available depending on the specific series and application requirements.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Applications
              </h3>
              <p className="text-gray-600">
                While primarily used as the starting point for our adhesive wheel weight production line, our Decoiler Machines are adaptable and can be integrated into various manufacturing processes that require controlled unwinding of coiled materials, such as sheet metal processing or wire forming industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
