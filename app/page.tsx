// Removed Locale and getDictionary imports
import { Hero } from '@/components/hero';
import { ProductionLine } from '@/components/production-line';
import { TechnologyAdvantages } from '@/components/technology-advantages';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { About } from '@/components/about';

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
