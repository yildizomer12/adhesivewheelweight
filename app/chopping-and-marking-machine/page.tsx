// Removed Locale import
import { Hero } from '@/components/hero';
import { ChoppingMachineSpecifications } from '@/components/machines/specifications';
import { ChoppingAndMarkingMachineDescription } from '@/components/chopping-and-marking-machine-description';
import { Contact } from '@/components/contact';

// Updated function signature - no params needed
export default async function ChoppingMarkingMachine() {
  // Removed lang extraction logic
  return (
    <>
      <Hero />
      <ChoppingMachineSpecifications />
      <ChoppingAndMarkingMachineDescription />
      <Contact />
    </>
  );
}

export { generateMetadata } from './page.metadata'
