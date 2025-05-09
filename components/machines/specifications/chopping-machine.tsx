'use client';

import { useState } from "react";
import Link from 'next/link'; 

import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from "@/components/ui/table";

export function ChoppingMachineSpecifications() {
  const [activeTable, setActiveTable] = useState<'production' | 'machine'>('production');
  
  

  const linkClassName = "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors";

  
  const introContent = (
    <>
      <p>
        Following the initial <Link href='/wire-flattening-machine' className={linkClassName}>Wire Flattening Machine</Link>, the precisely shaped steel profile enters our advanced chopping and marking stage. Our dedicated wheel weight machine performs high-speed, high-accuracy cutting, transforming the continuous flattened wire into individual segments destined to become Automotive Wheel Weights.
      </p>
      <p>
        This wheel weight manufacturing machine ensures each Wheel weight piece meets exact length and weight specifications, critical for both OEM Wheel Weights and aftermarket applications, including precursors for Wheel weihgt stic on types. Markings indicating weight values can also be applied during this automated process.
      </p>
      <p>
        As leading wheel weights machine manufacturers and wheel weights machine producers, we guarantee consistency and precision in every semi-finished piece. These precisely cut segments are now ready for final processing.
      </p>
      <p>
        Our machines is designed to compete with industry leaders such as: <Link href='https://shop.wegmann-automotive.com/en/' target="_blank" rel="noopener noreferrer" className={linkClassName}>Wegmann-Automotive (Germany)</Link> and <Link href='https://www.bendpak.com/' target="_blank" rel="noopener noreferrer" className={linkClassName}>Bendpak (USA)</Link>,
      </p>
    </>
  );

  return (
    <BaseSpecification
      imageSrc="/images/chopping-marking-machine.png"
      imageAlt={"Front view"} // Hardcoded
    >
      <div className="space-y-4 text-justify">
        {/* Replaced renderHTML call with JSX content */}
        {introContent}
      </div>

      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 cursor-pointer select-none">
              <TableHead
                onClick={() => setActiveTable('production')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'production' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                Production Specifications {/* Hardcoded */}
              </TableHead>
              <TableHead
                onClick={() => setActiveTable('machine')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'machine' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                Machine Specifications {/* Hardcoded */}
              </TableHead>
            </TableRow>
          </TableHeader>

          {activeTable === 'production' ? (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Production Capacity</TableCell> {/* Hardcoded */}
                <TableCell>100,000 pcs/hour (double feed)</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Energy Consumption</TableCell> {/* Hardcoded */}
                <TableCell>1.37 kWh per 100,000 pieces</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Strip Width (5g)</TableCell> {/* Hardcoded */}
                <TableCell>11.5 mm</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Cut Length</TableCell> {/* Hardcoded */}
                <TableCell>19 mm fixed</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Raw Material</TableCell> {/* Hardcoded */}
                <TableCell>St37 steel strip in roll</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Material Thickness</TableCell> {/* Hardcoded */}
                <TableCell>~3 mm</TableCell> {/* Hardcoded */}
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Dimensions</TableCell> {/* Hardcoded */}
                <TableCell>60cm x 80cm x 130cm</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Weight</TableCell> {/* Hardcoded */}
                <TableCell>720 kg</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Drive System</TableCell> {/* Hardcoded */}
                <TableCell>3 kW Motor with AC Drive</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Control System</TableCell> {/* Hardcoded */}
                <TableCell>Delta PLC with 7" Display</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Cutting System</TableCell> {/* Hardcoded */}
                <TableCell>70 precision blades</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Marking System</TableCell> {/* Hardcoded */}
                <TableCell>4 customizable drums</TableCell> {/* Hardcoded */}
              </TableRow>
            </TableBody>
          )}
        </Table>
      </div>
    </BaseSpecification>
  );
}