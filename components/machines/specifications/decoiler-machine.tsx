'use client';

import { useState } from "react";
// Removed useTranslations import
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from "@/components/ui/table";

export function DecoilerMachineSpecifications() {
  const [activeTable, setActiveTable] = useState<'standard' | 'wheel'>('standard');
  // Removed useTranslations hook call

  return (
    <BaseSpecification
      imageSrc="/images/decoiler-machine.png"
      imageAlt={"Key Features & Technical Specifications"} // Hardcoded
    >
      <div className="space-y-4 text-justify">
        <h2 className="text-2xl font-bold mb-2">Decoiler Machine</h2>
        <p className="text-gray-600">
          <strong>YILSA Coil Feeders & Uncoilers machines</strong> deliver superior performance and operate reliably across a wide range of applications. From light-duty tasks to heavy industrial use, we offer versatile solutions.<br/><br/>
          Our product range extends from <strong>manual decoiler machine</strong> to <strong>manual/hydraulic decoiler machine</strong>. Additionally, for <strong>wire rod straightening and cutting machines</strong>, we manufacture both <strong>Horizontal Decoiler</strong> and <strong>Pallet Decoiler</strong> machines.<br/><br/>
          We also produce <strong>sheet metal decoilers</strong> for <strong>press feeding systems</strong>.
        </p>
      </div>

      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 cursor-pointer select-none">
              <TableHead
                onClick={() => setActiveTable('standard')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'standard' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                Standard Product Range {/* Hardcoded */}
              </TableHead>
              <TableHead
                onClick={() => setActiveTable('wheel')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'wheel' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                Wheel Weight Series {/* Hardcoded */}
              </TableHead>
            </TableRow>
          </TableHeader>

          {activeTable === 'standard' ? (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Models</TableCell> {/* Hardcoded */}
                <TableCell>RL_300-10000</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Capacity Range</TableCell> {/* Hardcoded */}
                <TableCell>300-10 000 kg</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Strip Width</TableCell> {/* Hardcoded */}
                <TableCell>200-1200 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Max Outer Diameter</TableCell> {/* Hardcoded */}
                <TableCell>1000-1400 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Inner Diameter Range</TableCell> {/* Hardcoded */}
                <TableCell>300-550 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Drive System</TableCell> {/* Hardcoded */}
                <TableCell>Mechanical/Hydraulic</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Max Speed</TableCell> {/* Hardcoded */}
                <TableCell>40 m/min</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Power Range</TableCell> {/* Hardcoded */}
                <TableCell>0.25-5 kW</TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Models</TableCell> {/* Hardcoded */}
                <TableCell>Model LBADC</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Capacity Range</TableCell> {/* Hardcoded */}
                <TableCell>2000 kg</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Strip Width</TableCell> {/* Hardcoded */}
                <TableCell>400 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Max Outer Diameter</TableCell> {/* Hardcoded */}
                <TableCell>1300 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Inner Diameter Range</TableCell> {/* Hardcoded */}
                <TableCell>340-550 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Drive System</TableCell> {/* Hardcoded */}
                <TableCell>Mechanical/Hydraulic</TableCell> {/* Hardcoded */}
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Max Speed</TableCell> {/* Hardcoded */}
                <TableCell>40 m/min</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">Power Range</TableCell> {/* Hardcoded */}
                <TableCell>1.5 kW</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </div>
    </BaseSpecification>
  );
}
