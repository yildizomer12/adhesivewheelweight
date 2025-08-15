import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Wire Flattening Machine | Reduce Material Costs | YILSA";
  const description = "YILSA's Wire Flattening Machine transforms 8mm wire rod into precise flat steel, reducing raw material costs by up to 50% for wheel weight production.";
  const keywords = [
    "wire flattening machine",
    "flat wire machine",
    "steel wire processing",
    "material cost reduction",
    "wheel weight materials",
    "YILSA machines",
    "metal forming"
  ];
  const path = '/wire-flattening-machine'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/wire-flattening-machine.webp', // Placeholder, confirm if exists
      alt: 'YILSA Wire Flattening Machine',
      width: 1200, // Adjust if image dimensions differ
      height: 630,
    }
  });
}
