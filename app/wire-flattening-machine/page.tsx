
import { Hero } from "@/components/hero";
import { WireMachineSpecifications } from "@/components/machines/specifications";
import { WireFlatteningMachineDescription } from "@/components/wire-flattening-machine-description";
import { Contact } from "@/components/contact";

export { generateMetadata } from './page.metadata';


export default async function WireFlatteningMachinePage() {
  
  return (
    <>
      <Hero />
      <WireMachineSpecifications />
      <WireFlatteningMachineDescription />
      <Contact />
    </>
  );
}
