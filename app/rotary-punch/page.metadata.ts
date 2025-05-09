import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Rotary Punch Technology Explained | YILSA";
  const description = "Learn about YILSA's innovative Rotary Punch technology, enabling high-speed, energy-efficient, and precise cutting and marking for wheel weights and other applications.";
  const keywords = [
    "rotary punch technology",
    "high-speed cutting",
    "precision marking",
    "wheel weight manufacturing",
    "energy efficient machinery",
    "YILSA technology",
    "industrial automation"
  ];
  const path = '/rotary-punch'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/Rotary_Punch_Animation.gif', // Using the GIF, consider a static image if preferred for metadata
      alt: 'YILSA Rotary Punch Technology Animation',
      width: 1200, // Adjust if GIF dimensions differ or use a static image
      height: 630,
    }
  });
}
