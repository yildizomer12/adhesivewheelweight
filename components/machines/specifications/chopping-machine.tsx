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
      <h2 className="text-3xl font-bold text-center mb-6">Chopping and marking machine</h2>
      <p>
        Chopping and marking machine, used to <strong>manufacture wheel weights</strong>. Produces 5 gr <strong>stick-on wheel weights</strong> by cutting 19 mm long pieces from 11.5 mm wide rolled metal strip. 19 mm length is fixed. <strong>Steel Balancing Weights</strong> are produced in the desired weight by changing the width of the strip. A 23 mm wide strip is used to produce 10 gr. Desired gr and oz values can be obtained by using different strip widths.
      </p>
      <p>
        During production, <strong>automotive wheel weights</strong> are marked with the desired brand logo and product weights descriptions.
      </p>
      <p>
        <strong>High-precision Wheel Weights</strong> have a precision of ±0.5 gr. The machine can be set to 5 gr - 5 gr or 5 gr - 10 gr. SAE 1006/1008 type flat wire or slit steel sheets can be used as raw material.
      </p>
      <p>
        As trusted <strong>wheel weight machine manufacturers</strong>, our systems deliver accuracy and speed, competing with top brands like Wegmann Automotive and BendPak USA.
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