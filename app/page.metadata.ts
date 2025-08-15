import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; 


export async function generateMetadata(): Promise<Metadata> {

  const title = "Complete Adhesive Wheel Weight Production Lines | YILSA";
  const description = "YILSA provides complete production lines for adhesive wheel weights, from raw material processing with wire flattening machines to final taping and packaging.";
  const keywords = [
    "wheel weights",
    "adhesive wheel weights",
    "wheel weight manufacturing",
    "industrial wheel weight machines",
    "rotary punch",
    "wire flattening",
    "taping machine",
    "packaging machine",
    "decoiler machine",
    "chopping machine",
    "marking machine",
    "YILSA"
  ];
  const path = '/'; // Path for the homepage

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    // Optional: Specify a different image if needed for the homepage
    // image: { url: '/images/homepage-specific.webp', alt: 'Homepage Image' }
  });
}
