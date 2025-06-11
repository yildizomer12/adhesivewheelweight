'use client';

// Removed useTranslations import
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function WireMachineSpecifications() {
  // Removed useTranslations hook call

  return (
    <BaseSpecification
      imageSrc="/images/wire-flattening-machine.png"
      imageAlt="Wire Flattening Machine"
    >
      <div className="space-y-4 text-justify">
        <p className="text-gray-600">
          Our <strong>Wire Flattening Machine</strong> transforms Φ8 1006 and 1008 grade wire rod into smooth 11.5×3 mm flat metal strips. The flattening process ensures the precision required for manufacturing <strong>Fe stick-on wheel weights</strong> and provides a smooth surface that improves the adhesion of pressure-sensitive tapes.<br/>
          <br/>
          The strips produced by the <strong>Wire Flattening Machine</strong> play a critical role in ensuring that the manufactured <strong>adhesive stick-on wheel weights</strong> stay securely on the rim and maintain accurate <strong>wheel balancing</strong>.<br/>
          <br/>
          This machine is not used in the production of <strong>lead clip-on wheel weights</strong> or rounded <strong>tire balance wheel weights</strong>.<br/>
          <br/>
          It is ideal for manufacturing <strong>straight corner wheel weights</strong> <strong>Fe sticker</strong>, <strong>Fe/steel/iron adhesive wheel balance weights</strong>, and <strong>zinc-coated wheel weights</strong>.
        </p>
      </div>

      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Power System</TableCell>
              <TableCell>Power System: 11 kW AC Motor</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Production Speed</TableCell>
              <TableCell>Production Speed: 16 m/min</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Machine Dimensions</TableCell>
              <TableCell>Machine Dimensions: 80cm Width x 120cm Length x 180cm Height</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Machine Weight</TableCell>
              <TableCell>Machine Weight: 1000 kg</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Input Material</TableCell>
              <TableCell>Input Material: 8mm Wire Rod</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Output Product</TableCell>
              <TableCell>Output Product: 11.5 x 3mm Flat Steel</TableCell> {/* Hardcoded */}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </BaseSpecification>
  );
}