'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
// Imports removed

const faqs = [ // Hardcoded English FAQ content with corrected syntax
  { // Added opening brace and commas
    question: "What does the warranty cover?",
    answer: "The warranty covers mechanical parts for 1 year, excluding buyer misuse. It starts from the delivery date. The buyer is responsible for service personnel costs, including accommodation, travel, round-trip airfare, and meals. Molds are excluded from the warranty. Electronic devices' warranty is subject to the purchasing institution's conditions, and communication with these institutions is the buyer's responsibility. Heat treatment and material certificates will be provided. Service during the warranty period is free unless the issue is due to buyer error."
  },
  { // Added commas
    question: "How can I get technical support for the machine?",
    answer: "YILSA ensures machine reliability with internal technical support available whenever required. For questions or problems, refer to the user manual or contact the sales representative."
  },
  { // Added commas
    question: "How is the machine installed?",
    answer: "The machines are designed to be compact and monolithic, making them easy to set up. The seller's personnel will provide training for installation and usage in the seller's production area."
  },
  { // Added commas
    question: "How can I acquire spare parts?",
    answer: "The seller provides male and female molds as spare parts for a fee. Contact YILSA for any required spare parts."
  },
  { // Added commas
    question: "Is training provided for machine operators?",
    answer: "The seller's authorized personnel will train the buyer's personnel in the seller's production area. The training takes one day and includes the installation and usage demonstration. Prior to operating the machine, ensure all operators have carefully read and understood the user manual."
  }
];

export function FAQ() {
  // Hook calls removed

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none shadow-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-4">
            <a
              href={`/faq`} // Removed language prefix
              className="flex items-center justify-between px-6 py-4 font-semibold rounded-md shadow-lg glass-card hover:no-underline"
            >
              <b><span>Click here to view all FAQs</span></b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 ml-2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
