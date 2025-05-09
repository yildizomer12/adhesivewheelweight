import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "High-Speed Wheel Weight Chopping & Marking Machine | YILSA";
  const description = "Discover YILSA's advanced Chopping and Marking Machine utilizing Rotary Punch technology for high-speed (100,000 pcs/hr) and precise wheel weight production.";
  const keywords = [
    "chopping machine",
    "marking machine",
    "wheel weight production",
    "rotary punch technology",
    "high-speed manufacturing",
    "YILSA machines",
    "adhesive wheel weights"
  ];
  const path = '/chopping-and-marking-machine'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/chopping-marking-machine.png',
      alt: 'YILSA Chopping and Marking Machine for Wheel Weights',
      width: 1200, // Adjust if image dimensions differ
      height: 630,
    }
  });
}
