import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Automated Wheel Weight Taping & Packaging Machine | YILSA";
  const description = "Streamline your production with YILSA's automated Taping and Packaging Machine for adhesive wheel weights. High precision and efficiency (90 kg/hr).";
  const keywords = [
    "taping machine",
    "packaging machine",
    "wheel weight automation",
    "adhesive wheel weights",
    "automated packaging",
    "YILSA machines",
    "production line equipment"
  ];
  const path = '/taping-and-packaging-machine'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/taping-packaging-machine.webp',
      alt: 'YILSA Automated Taping and Packaging Machine',
      width: 1200, // Adjust if image dimensions differ
      height: 630,
    }
  });
}
