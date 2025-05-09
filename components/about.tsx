'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// Removed useTranslations import
import { Eye, Lightbulb, Trophy, Medal } from 'lucide-react';

const aboutSections = [
  {
    question: 'company.about_us.vision.question' as const,
    answer: 'company.about_us.vision.answer' as const,
    icon: Eye
  },
  {
    question: 'company.about_us.innovation.question' as const,
    answer: 'company.about_us.innovation.answer' as const,
    icon: Lightbulb
  },
  {
    question: 'company.about_us.expertise.question' as const,
    answer: 'company.about_us.expertise.answer' as const,
    icon: Trophy
  },
  {
    question: 'company.about_us.quality.question' as const,
    answer: 'company.about_us.quality.answer' as const,
    icon: Medal
  }
] as const;

export function About() {
  // Removed useTranslations hook call
  const [value, setValue] = React.useState('item-0');
  const [lastHovered, setLastHovered] = React.useState('item-0');
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleHover = (itemValue: string) => {
    setLastHovered(itemValue);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set a new timeout for 100ms before opening the accordion
    timeoutRef.current = setTimeout(() => {
      setValue(itemValue);
    }, 50);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
<section id="about" className="py-20 bg-[#e6f0f7]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#cfe2ee] text-[#0065A1]">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            We are YILSA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Engineering Excellence in Wheel Weight Solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            value={value}
            onValueChange={setValue}
            className="space-y-4"
          >
            {[ // Hardcoded English content based on aboutSections structure
              {
                question: "Our Vision",
                answer: "YILSA is a forward-thinking company dedicated to innovation and customer satisfaction in the wheel weight industry. Founded on the principles of quality, efficiency, and technological advancement, we continue to set industry standards for excellence.",
                icon: Eye
              },
              {
                question: "Research and Development",
                answer: "Our commitment to innovation began with the groundbreaking Rotary Punch R&D project in 2013, revolutionizing production speed and efficiency. We have developed state-of-the-art wire flattening machines that significantly reduce raw material costs by up to 50%. Our integrated taping and packaging systems ensure consistent quality across all products.",
                icon: Lightbulb
              },
              {
                question: "Production Expertise",
                answer: "YILSA leads the industry in fast and precise wheel weight production, delivering unmatched accuracy in every product. Our commitment to adaptability means we are constantly evolving to meet market demands and exceed customer expectations.",
                icon: Trophy
              },
              {
                question: "Quality Assurance",
                answer: "We are dedicated to providing reliable and high-performance adhesive wheel weights specifically designed for tire shops and garages. Our quality commitment ensures that every product meets the highest industry standards.",
                icon: Medal
              }
            ].map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-none shadow-lg"
                onMouseEnter={() => handleHover(`item-${index}`)}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    {section.icon && <section.icon className="h-5 w-5 text-[#0065A1]" />}
                    <span className="text-left font-semibold">{section.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {section.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
