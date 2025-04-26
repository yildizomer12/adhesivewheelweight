'use client';

import { useState } from "react";
import { useTranslations } from "@/hooks/use-translations";
import { BaseSpecification } from "./base-specification";
import { useRouter } from 'next/navigation'; // Import useRouter
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
  const { t } = useTranslations();
  const router = useRouter(); // Initialize useRouter

  // Define renderHTML function locally
  const renderHTML = (html: string) => {
    const processedHtml = html
      .replace(/<bold>(.*?)<\/bold>/g, '<strong>$1</strong>') // Keep bold handling if needed elsewhere
      .replace(
        /<a href=['"](.+?)['"]>(.*?)<\/a>/g,
        (match, href, text) =>
        `<span class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors" data-href="${href}">${text}</span>`
      );

    return (
      <div
        dangerouslySetInnerHTML={{ __html: processedHtml }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const href = target.getAttribute('data-href');
          if (href) {
            e.preventDefault();
            // Check if it's an external link
            if (href.startsWith('http://') || href.startsWith('https://')) {
              window.open(href, '_blank', 'noopener,noreferrer');
            } else {
              router.push(href);
            }
          }
        }}
        className="leading-relaxed" // Removed space-y-4 as it's handled by the outer div now
      />
    );
  };

  const introPart1 = t('machines.chopping.specifications.intro.part1');
  const introPart2 = t('machines.chopping.specifications.intro.part2');

  return (
    <BaseSpecification
      imageSrc="/images/chopping-marking-machine.png"
      imageAlt={t('machines.chopping.specifications.frontView')}
    >
      <div className="space-y-4 text-justify">
        {/* Conditionally render part1 only if it's not empty */}
        {introPart1 && renderHTML(introPart1)}
        {/* Use renderHTML for part2 as well */}
        {renderHTML(introPart2)}
      </div>
      
      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 cursor-pointer select-none">
              <TableHead 
                onClick={() => setActiveTable('production')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'production' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                {t('machines.chopping.specifications.tabs.production')}
              </TableHead>
              <TableHead 
                onClick={() => setActiveTable('machine')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'machine' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                {t('machines.chopping.specifications.tabs.machine')}
              </TableHead>
            </TableRow>
          </TableHeader>
          
          {activeTable === 'production' ? (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.production.capacity')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.production.capacityValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.production.energy')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.production.energyValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.production.stripWidth')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.production.stripWidthValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.production.cutLength')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.production.cutLengthValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.production.rawMaterial')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.production.rawMaterialValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.production.thickness')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.production.thicknessValue')}</TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.machine.dimensions')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.machine.dimensionsValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.machine.weight')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.machine.weightValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.machine.drive')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.machine.driveValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.machine.control')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.machine.controlValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.machine.cutting')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.machine.cuttingValue')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.chopping.specifications.machine.marking')}</TableCell>
                <TableCell>{t('machines.chopping.specifications.machine.markingValue')}</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </div>
    </BaseSpecification>
  );
}