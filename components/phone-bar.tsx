'use client';

import { Phone } from 'lucide-react';

export function PhoneBarDesktop() {
  return (
    <div className="hidden md:block fixed left-6 top-24 z-[100]">
      <div className="flex flex-row gap-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg py-2 px-4 hover:bg-white transition-colors duration-300 items-center">
        <a
          href="tel:+905494300020"
          aria-label="Phone Number"
          className="text-gray-600 hover:text-[#0065A1] transition-colors flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">+90 549 430 00 20</span>
        </a>
      </div>
    </div>
  );
}

export function PhoneBarMobile() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[100] md:hidden">
      <div className="flex flex-row gap-3 bg-white/90 backdrop-blur-sm rounded-t-full shadow-lg py-2 px-4 hover:bg-white transition-colors duration-300 items-center">
        <a
          href="http://wa.me/905494300020"
          aria-label="Phone Number"
          className="text-gray-600 hover:text-[#0065A1] transition-colors flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">+90 549 430 00 20</span>
        </a>
      </div>
    </div>
  );
}
