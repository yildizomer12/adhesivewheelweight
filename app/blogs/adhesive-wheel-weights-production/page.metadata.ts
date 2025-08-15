import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Mastering Adhesive Wheel Weight Production with Rotary Punch Technology";
  const description = "Discover how YILSA's Rotary Punch technology revolutionizes adhesive wheel weight production, achieving high speeds and precision for superior manufacturing results.";
  const keywords = [
    "adhesive wheel weight production",
    "rotary punch technology",
    "wheel weight manufacturing",
    "high-speed production",
    "YILSA machines",
    "wheel balancing"
  ];
  const path = '/blogs/adhesive-wheel-weights-production'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Using default image, consider a specific one for the blog post
      url: '/images/production-line.webp', // Changed from placeholder
      alt: 'Adhesive Wheel Weight Production Line Detail',
      width: 1200, // Adjust if image dimensions differ
      height: 630,
    }
  });
}
