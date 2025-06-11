'use client';

import Link from 'next/link'; // Import Link
import { BaseSpecification } from "./base-specification";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function TapingMachineSpecifications() {

  const linkClassName = "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors";

  
  const descriptionContent = (
    <>
      <p>
        <strong>Lead-Free Wheel Weight</strong> production is ideal with our <strong>Taping and Packaging Machine</strong>. <strong>Steel wheel weights</strong> lined from the sorting drum pass through <strong>5g/10g wheel weight</strong> channels to be arranged. <strong>Wheel Weights</strong> are aligned on extra tape 5×4+10×4.<br/>
        The <strong>wheel weight machine</strong> is adjustable for 5-5g and 5-10g, or can be produced only for 5-5g, which is more economical. Our company <strong>YILSA</strong> foresees this version to become a trend and recommends it.<br/>
        As <strong>wheel weight machine producers</strong>, our machines produce <strong>extra blue tape 5g/10g wheel weights</strong>. Our machines can also use <strong>extra paper tape</strong>.<br/>
        The automation of our <strong>Adhesive Wheel Weight Machine</strong> is developed by our own staff as a result of years of experience. Therefore, our <strong>wheel weight producing machines</strong> work smoothly and are user-experience focused.<br/>
        Should not be confused with a <strong>Wheel Weight Die-Casting Machine</strong>. Our machines do not produce <strong>clip-on wheel weight</strong> or <strong>lead wheel weight</strong>.<br/>
        They are suitable for <strong>wheel weights for aluminum wheels</strong>, <strong>motorcycle wheel weight</strong>, and <strong>truck wheel weight</strong>.
      </p>
    </>
  );


  return (
    <BaseSpecification
      imageSrc="/images/taping-packaging-machine.png"
      imageAlt="Taping and Packaging Machine"
    >
      <div className="space-y-4 text-justify">
        {/* Replaced renderHTML call with JSX content */}
        {descriptionContent}
      </div>

      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Dimensions</TableCell>
              <TableCell>1158mm x 1058mm x 1380mm</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Configuration</TableCell>
              <TableCell>5g+5g and 5g+10g configurations</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Production Capacity</TableCell>
              <TableCell>90 kg/hr</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Net Weight</TableCell>
              <TableCell>350 kg</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Energy Consumption</TableCell>
              <TableCell>0.2 kWh/hr</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Control System</TableCell>
              <TableCell>Delta PLC with 7" Display</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Packaging Capacity</TableCell>
              <TableCell>15 boxes/hr (with optional unit)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </BaseSpecification>
  );
}