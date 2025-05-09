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
        The final automated stage in our production line involves preparing the precisely cutting segments by <Link href='/chopping-and-marking-machine' className={linkClassName}>Chopping and Marking Machine</Link> for market readiness, particularly focusing on Adhesive Wheel Weights. The final automation stage in our production line involves the precise stacking and packaging of the cut segments, with a particular focus on the Adhesive Wheel Weights, making them ready for market. Our sophisticated taping and packaging machine meticulously applies high-performance adhesive tape, transforming the segments into Self-adhesive Balancing Weights.
      </p>
      <p>
        This process is optimized for producing Steel Wheel Weights, especially popular Fe stick on wheel weight types designed for modern wheel weights for aluminum wheels. The machine then accurately arranges these Steel Balancing Weights onto release liner strips and prepares them for final packaging, ensuring product integrity and ease of use for technicians. The result is a finished product ready for distribution.
      </p>
      <p>
        Our Taping and Packaging Machine is aligned with the latest industry standards. Similar to the high-efficiency machines used by leading manufacturers like <Link href='https://www.3m.com/3M/en_US/post-factory-installation-us/wheel-weights/' target="_blank" rel="noopener noreferrer" className={linkClassName}>3M (USA)</Link>, <Link href='https://www.plombco.com/steel-passenger-car-clip-on-wheel-weights/' target="_blank" rel="noopener noreferrer" className={linkClassName}>Plombco (USA)</Link> known for their advanced automation and precision in wheel weight production, our machine offers superior performance.
      </p>
      <p>
        If you want to compare our production with the process in this video, please visit our <Link href='https://www.youtube.com/watch?v=Q4on1c-EqHQ&list=PLGiOF2X6GljlJMjUlvRu8lDKTwnZJ1dvc' target="_blank" rel="noopener noreferrer" className={linkClassName}>youtube channel</Link>
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