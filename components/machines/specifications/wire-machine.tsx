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
          Our state-of-the-art wheel weight production begins with the most cost-effective and reliable raw material: Ø8 steel wire rod. This fundamental step involves transforming the round wire into a precisely dimensioned flat profile, the essential base for high-quality Lead-Free Wheel Weights. \nUtilizing advanced wire slattening and shaping technology within our specialized steel wire flattening machine, we ensure consistent material properties and dimensions crucial for accurate Wheel Balancing Weights. This initial process is critical for guaranteeing the performance and reliability of the final product. The precision achieved here sets the foundation for subsequent manufacturing stages. Learn more about how this shaped wire is prepared by Chopping and Marking Machine for the next step. Additionally, while global manufacturers such as FENN Torin (USA) and Maschinenfabrik NIEHOFF (Germany) offer high-speed flattening technologies for a wide range of industries, our specialized system is designed exclusively for the production of adhesive wheel weights {/* Hardcoded */}
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