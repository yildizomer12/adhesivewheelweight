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
      <h2 className="text-2xl font-bold mb-2">Adhesive Wheel weight</h2>
      <p className="text-gray-600 text-justify mb-6">
        Our <strong>wheel weights for tires</strong> are applied onto <strong>high-quality adhesive tape</strong>, ensuring maximum bond strength. Thanks to this, our <strong>Stick-On Adhesive Tape Wheel Weight</strong> products deliver outstanding performance and reliability.<br/><br/>
        <strong>Zinc Coated Stick-On Balance Wheel Weight Lead-Free Cars SUVs Trucks Wheel Balancers</strong> offer excellent corrosion resistance. Their sharp-edged design ensures precise fitment and a professional appearance, making them ideal <strong>wheel weights for the service market</strong>.<br/><br/>
        Weight accuracy is maintained within ±0.5 g per strip, ensuring that our <strong>Tire / Wheel Balancing Weights Sticky</strong> products keep your wheels perfectly balanced as intended.<br/><br/>
        Our <strong>Self-adhesive Balancing Weights</strong> are manufactured using our in-house developed <strong>wheel weight producing machines</strong>.
      </p>
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
