// Removed Locale and getDictionary imports
import { Hero } from '@/components/hero';
import dynamic from 'next/dynamic';

// Lazy load components that aren't immediately visible
const ProductionLine = dynamic(() => import('@/components/production-line').then(mod => mod.ProductionLine), {
  loading: () => <div className="min-h-[400px]" />,
});

const TechnologyAdvantages = dynamic(() => import('@/components/technology-advantages').then(mod => mod.TechnologyAdvantages), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQ = dynamic(() => import('@/components/faq').then(mod => mod.FAQ), {
  loading: () => <div className="min-h-[400px]" />,
});

const About = dynamic(() => import('@/components/about').then(mod => mod.About), {
  loading: () => <div className="min-h-[400px]" />,
});

const Contact = dynamic(() => import('@/components/contact').then(mod => mod.Contact), {
  loading: () => <div className="min-h-[400px]" />,
});

export { generateMetadata } from './page.metadata';

// Removed Props interface

// Updated function signature - no params needed
export default async function HomePage() {
  // Removed lang extraction logic
  return (
    <>
      <Hero />
      <ProductionLine />
      <TechnologyAdvantages />
      <FAQ />
      <About />
      <Contact />
    </>
  );
}
