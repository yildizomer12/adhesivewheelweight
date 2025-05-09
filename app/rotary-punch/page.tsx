import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';
import { TechnologySection } from '@/components/technology-section';


export { generateMetadata } from './page.metadata'


export default async function RotaryPunchPage() {
  
  return (
    <>
      <Hero />
      {/* Removed lang prop */}
      <TechnologySection />
      <Contact />
    </>
  );
}
