import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Premium Adhesive Wheel Weights | YILSA";
  const description = "Discover high-quality adhesive wheel weights manufactured by YILSA using advanced Rotary Punch technology for superior adherence, accuracy, and performance.";
  const keywords = [
    "adhesive wheel weights",
    "wheel weights",
    "tire balancing",
    "wheel balancing weights",
    "YILSA wheel weights",
    "automotive parts",
    "galvanized wheel weights"
  ];
  const path = '/wheel-weights'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Using default production line image, consider a specific wheel weight image
      url: '/images/production-line-extended.webp', // Changed from placeholder '/images/wheel-weights.webp'
      alt: 'YILSA Adhesive Wheel Weights',
      width: 1200,
      height: 630,
    }
  });
}
