'use client';

import { Badge } from '@/components/ui/badge';
// Removed useTranslations import

export function AboutSection() {
  // Removed useTranslations hook call
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <Badge className="px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1] hover:bg-[#e6f0f7]">
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Engineering Excellence in Wheel Weight Solutions
          </h2>
          <p className="text-gray-700">
            YILSA is a forward-thinking company dedicated to innovation and customer satisfaction in the wheel weight industry. Founded on the principles of quality, efficiency, and technological advancement, we continue to set industry standards for excellence. Our commitment to these core values drives us to consistently deliver superior solutions for our customers.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Our Vision
          </h3>
        </div>
        <p className="text-gray-700 mt-4">
          YILSA is committed to innovation and customer satisfaction in the wheel weight industry. We were founded on the principles of quality, efficiency and technological advancement, and we continue to set industry standards for excellence.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Research and Development
          </h3>
          <p className="text-gray-700 mt-4">
            Our commitment to innovation began with the groundbreaking Rotary Punch R&D project in 2013, revolutionizing production speed and efficiency. We have developed state-of-the-art wire flattening machines that significantly reduce raw material costs by up to 50%. Our integrated taping and packaging systems ensure consistent quality across all products.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Production Expertise
          </h3>
          <p className="text-gray-700 mt-4">
            YILSA leads the industry in fast and precise wheel weight production, delivering unmatched accuracy in every product. Our commitment to adaptability means we are constantly evolving to meet market demands and exceed customer expectations.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Quality Assurance
          </h3>
          <p className="text-gray-700 mt-4">
            We are dedicated to providing reliable and high-performance adhesive wheel weights specifically designed for tire shops and garages. Our quality commitment ensures that every product meets the highest industry standards.
          </p>
        </div>
      </div>
    </section>
  );
}
