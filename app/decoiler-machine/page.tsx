import DecoilerMachineDescription from '@/components/decoiler-machine-description';

import { Hero } from '@/components/hero';
import { MachineSpecifications } from '@/components/machine-specifications';
import { Contact } from '@/components/contact';


export { generateMetadata } from './page.metadata'

export default function DecoilerMachinePage() {
  return (
    <>
      <Hero />
      <MachineSpecifications />
      <DecoilerMachineDescription />
      <Contact />
    </>
  );
}
