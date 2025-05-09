import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "FAQ | YILSA Wheel Weight Machines & Technology";
  const description = "Find answers to frequently asked questions about YILSA's wheel weight machines, rotary punch technology, production capabilities, and adhesive wheel weights.";
  const keywords = [
    "FAQ",
    "frequently asked questions",
    "YILSA machines",
    "wheel weight production",
    "rotary punch",
    "adhesive wheel weights",
    "technical support"
  ];
  const path = '/faq'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/faq_background.jpg',
      alt: 'Frequently Asked Questions about YILSA Machines',
      width: 1200, // Adjust if image dimensions differ
      height: 630,
    }
  });
}
