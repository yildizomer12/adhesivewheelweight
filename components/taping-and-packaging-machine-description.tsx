'use client';

// Removed useTranslations import

export default function TapingAndPackagingMachineDescription() {
  // Removed useTranslations hook call

  return (
    <div>
      <section className="w-full bg-white pt-16 pb-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                Product Description {/* Hardcoded */}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Mastering Production Excellence {/* Hardcoded */}
              </h2>
            </div>

            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                Our Taping and Packaging Machine stands at the forefront of wheel weight automation technology. This precision-engineered system transforms your production line, delivering perfectly finished products ready for market distribution. {/* Hardcoded */}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
              <img
                src="/images/production-line-highlight.bmp"
                alt="Complete wheel weight production line with highlighted Taping and Packaging Machine"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                System Features {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                Powered by advanced Delta PLC technology, our system offers unprecedented control over the finishing process. The intuitive 7" interface provides complete command over production parameters, while real-time monitoring ensures consistent quality across high-volume operations. {/* Hardcoded */}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Advanced Features {/* Hardcoded */}
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Dual Configuration System: Seamlessly switch between 5g+5g and 5g+10g formats</li> {/* Hardcoded */}
                <li>Precision Control: Advanced Delta PLC system with intuitive interface</li> {/* Hardcoded */}
                <li>Real-Time Monitoring: Live production tracking and adjustment</li> {/* Hardcoded */}
                <li>Automated Quality Control: Consistent tape application and alignment</li> {/* Hardcoded */}
                <li>Optional Integration: Synchronized packaging unit capability</li> {/* Hardcoded */}
                <li>Energy Efficient Design: Optimized power consumption at 0.2 kWh/hr</li> {/* Hardcoded */}
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Production Excellence {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                The system's innovative design combines high-speed production with precision quality control. The optional packaging unit integrates seamlessly with the taping process, creating a fully automated finishing line that transforms raw wheel weights into market-ready products. {/* Hardcoded */}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Integration & Control {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                Every aspect of the production process is monitored and controlled through our advanced interface system. The machine's modular design allows for easy integration of the optional packaging unit, while the sophisticated control system ensures perfect synchronization between taping and packaging operations. {/* Hardcoded */}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Performance Benefits {/* Hardcoded */}
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Maximum Productivity: Process up to 90 kg per hour</li> {/* Hardcoded */}
                <li>Superior Quality Control: Consistent tape application</li> {/* Hardcoded */}
                <li>Flexible Configuration: Easy switching between weight combinations</li> {/* Hardcoded */}
                <li>Efficient Packaging: Optional unit processes 15 boxes per hour</li> {/* Hardcoded */}
                <li>User-Friendly Operation: Minimal training required</li> {/* Hardcoded */}
                <li>Reliable Performance: Built for continuous operation</li> {/* Hardcoded */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
