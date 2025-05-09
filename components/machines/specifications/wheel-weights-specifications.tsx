'use client';

// Removed useTranslations import
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

export function WheelWeightsSpecifications() {
  // Removed useTranslations hook call

  return (
    <BaseSpecification
      imageSrc="/images/wheel-weights.png"
      imageAlt="Wheel Weights"
    >
      <div className="space-y-4 text-justify">
        <p className="text-gray-600">
          Our wheel weights combine precision engineering with premium materials to deliver superior performance and reliability. They feature self-adhesive technology with high-quality adhesive tape, ensuring secure attachment. The galvanized coating enhances corrosion resistance, while the sharp edges guarantee precise fitment and a professional appearance. The weight accuracy is maintained within ±0.5g per strip. These wheel weights are available in versatile combinations to meet all balancing needs, and each box contains 50-100 strips of professional-grade weights. {/* Hardcoded */}
        </p>
      </div>

      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[33%]">Specification</TableHead> {/* Hardcoded */}
              <TableHead className="w-[33%]">5-5 Gr Series</TableHead> {/* Hardcoded */}
              <TableHead className="w-[33%]">10-5 Gr Series</TableHead> {/* Hardcoded */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Dimensions</TableCell> {/* Hardcoded */}
              <TableCell>19 x 11.5 x 3 mm</TableCell> {/* Hardcoded */}
              <TableCell>19 x 23 x 3 mm</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Strip Configuration</TableCell> {/* Hardcoded */}
              <TableCell>60g (12x5g)</TableCell> {/* Hardcoded */}
              <TableCell>60g (4x5g + 4x10g)</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Strips per Box</TableCell> {/* Hardcoded */}
              <TableCell>50-100</TableCell> {/* Hardcoded */}
              <TableCell>50-100</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Total Weight per Box</TableCell> {/* Hardcoded */}
              <TableCell>3-6 kg</TableCell> {/* Hardcoded */}
              <TableCell>3-6 kg</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Surface Treatment</TableCell> {/* Hardcoded */}
              <TableCell>Galvanized</TableCell> {/* Hardcoded */}
              <TableCell>Galvanized</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Edge Type</TableCell> {/* Hardcoded */}
              <TableCell>Sharp precision edges</TableCell> {/* Hardcoded */}
              <TableCell>Sharp precision edges</TableCell> {/* Hardcoded */}
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">Adhesive Type</TableCell> {/* Hardcoded */}
              <TableCell>Premium double-sided</TableCell> {/* Hardcoded */}
              <TableCell>Premium double-sided</TableCell> {/* Hardcoded */}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </BaseSpecification>
  );
}
