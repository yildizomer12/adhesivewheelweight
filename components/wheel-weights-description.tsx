'use client';

// Removed useTranslations import

export default function WheelWeightsDescription() {
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
                Professional-Grade Wheel Weights for Optimal Balance {/* Hardcoded */}
              </h2>
            </div>

            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                Our wheel weights represent the pinnacle of balancing technology, designed specifically for professional tire shops and automotive service centers. Each weight is manufactured using advanced Rotary Punch technology, ensuring consistent quality and precise dimensions that exceed industry standards. The weights feature a specially formulated adhesive backing that provides exceptional bonding strength while allowing clean removal when needed. Our galvanized coating process ensures superior corrosion resistance, making these weights suitable for all weather conditions and environments. {/* Hardcoded */}
              </p>
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Quality Assurance {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                Each production batch undergoes rigorous quality control, with materials sourced from certified suppliers. Our manufacturing process is certified to international standards, and we maintain consistent weight accuracy across all production runs to ensure reliability and performance. {/* Hardcoded */}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Applications {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                These wheel weights are ideal for professional tire service centers, automotive dealerships, fleet maintenance facilities, high-volume tire retailers, and performance vehicle applications. {/* Hardcoded */}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Manufacturing Excellence {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                We maintain complete control over the production process using our proprietary manufacturing equipment. Our wheel weights are produced using advanced Rotary Punch technology, which ensures superior quality compared to traditional press systems. For those interested in wheel weight manufacturing capabilities, we also offer complete production line solutions featuring our innovative machinery. {/* Hardcoded */}
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
                <img
                  src="/images/production-line.webp"
                  alt="Production Line"
                  className="w-full h-auto object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Order and Packaging Information {/* Hardcoded */}
              </h3>
              <p className="text-gray-600">
                Each box contains 100 strips, and bulk ordering is available for high-volume users. Custom packaging solutions can be provided for distributors, and full technical documentation is included with every order. A certification of conformity is also available upon request. {/* Hardcoded */}
              </p>
              <p className="mt-4 text-gray-600">
                Want to learn more about our manufacturing solutions? Explore our range of wheel weight production equipment featuring innovative Rotary Punch technology. {/* Hardcoded */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
