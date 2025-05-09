'use client';

// Removed useTranslations import

export function WireFlatteningMachineDescription() {
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
              <h2 className="text-3xl sm:text-4xl font-bold">
                Purpose-Built Innovation {/* Hardcoded */}
              </h2>
            </div>

            <div className="mt-8 text-justify space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Wire Flattening and Shaping: The First Step in Precision Adhesive Wheel Weight Manufacturing
              </h3>
              <p className="text-gray-600">
                The Wire Flattening Machine is the essential first step in the Adhesive Wheel Weight Production Line, transforming raw fi8 wire rod into flat, uniform metal strips. This process ensures that the material is properly prepared for the subsequent chopping, marking, taping, and packaging stages.
              </p>
              <p className="text-gray-600">
                While global manufacturers like FENN Torin (USA) and Maschinenfabrik NIEHOFF (Germany) offer high-speed flattening technologies for a broad range of industries, our specialized system is exclusively designed for the production of adhesive wheel weights. Unlike multi-purpose flattening mills, our machine is optimized for:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>High surface quality to ensure optimal adhesive bonding</li>
                <li>Consistent strip thickness and width for precise die-cutting</li>
                <li>Easy integration with downstream automation</li>
              </ul>
              <p className="text-gray-600">
                Inspired by global standards but tailored to your specific application, our solution combines cost efficiency, local service, and high-performance output—offering an ideal balance for businesses focused on wheel weight production.
              </p>
              <div className="mt-6 space-x-4">
                <a href="/chopping-and-marking-machine" className="text-blue-600 hover:underline">
                  🔗 Next step: Chopping and Marking Machine →
                </a>
                <a href="/taping-and-packaging-machine" className="text-blue-600 hover:underline">
                  🔗 Final step: Taping and Packaging Machine →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
