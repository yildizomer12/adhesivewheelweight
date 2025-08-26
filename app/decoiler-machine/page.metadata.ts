import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Industrial Decoiler Machines (300kg - 10,000kg) | YILSA";
  const description = "Explore YILSA's range of robust decoiler machines, handling coils from 300kg to 10,000kg. Essential for efficient material handling in wheel weight production lines.";
  const keywords = [
    "decoiler machine",
    "uncoiler machine",
    "coil handling",
    "material handling equipment",
    "wheel weight production line",
    "YILSA machines",
    "metal processing"
  ];
  const path = '/decoiler-machine'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/decoiler-machine.webp',
      alt: 'YILSA Industrial Decoiler Machine',
      width: 1200, // Adjust if image dimensions differ
      height: 630,
    }
  });
}
