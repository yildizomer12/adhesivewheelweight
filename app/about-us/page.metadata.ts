import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "About YILSA | Wheel Weight Machine Manufacturing";
  const description = "Learn about YILSA, a leading manufacturer of adhesive wheel weight production machines, including rotary punch, wire flattening, and taping systems.";
  const keywords = [
    "YILSA",
    "about us",
    "wheel weight machines",
    "manufacturing",
    "rotary punch technology",
    "wire flattening machine",
    "taping machine",
    "production lines"
  ];
  const path = '/about-us'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/common-background.jpg',
      alt: 'About YILSA Manufacturing Facility',
      width: 1200,
      height: 630,
    }
  });
}
