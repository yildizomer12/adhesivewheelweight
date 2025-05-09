import { type Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/metadata'; // Correct import path


export async function generateMetadata(): Promise<Metadata> {

  const title = "Wheel Weight Manufacturing Insights | YILSA Blog";
  const description = "Explore expert insights, articles, and news on wheel weight manufacturing machines, rotary punch technology, and industry innovations from YILSA.";
  const keywords = [
    "wheel weight machines blog",
    "wheel weight production insights",
    "adhesive wheel weights articles",
    "wheel weight manufacturing news",
    "rotary punch technology",
    "YILSA blog"
  ];
  const path = '/blogs'; 

  
  return generateSEOMetadata({
    title,
    description,
    keywords,
    path,
    image: { // Specific image for this page
      url: '/images/blog-background.jpg',
      alt: 'YILSA Blog - Wheel Weight Manufacturing Insights',
      width: 1200,
      height: 630,
    }
  });
}
