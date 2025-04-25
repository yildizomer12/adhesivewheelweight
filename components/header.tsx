'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react'; // Removed X
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button'; // Added Button for SheetTrigger
import { DialogTrigger } from '@/components/ui/dialog'; // Added DialogTrigger import
import { QuoteDialog } from '@/components/quote-dialog';
import { useTranslations } from '@/hooks/use-translations';
import { usePathname } from 'next/navigation';

export function Header() {
  // Removed isMenuOpen state
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Kept for desktop dropdown
  const { locale, t } = useTranslations();
  const pathname = usePathname();

  // Effect to close desktop dropdown on path change
  useEffect(() => {
    setIsProductsOpen(false);
  }, [pathname]);

  // Removed resize effect for isMenuOpen

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link href={`/${locale}`} className="flex-shrink-0 flex items-center cursor-pointer">
            <Image
              src="/yilsa-logo.svg"
              alt="YILSA Logo"
              width={40}
              height={40}
              className="h-10 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-[#0065A1] dark:text-blue-400">YILSA</span>
          </Link>

          {/* Navigation - Center (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8 flex-1 justify-center"> {/* Adjusted spacing */}
            {/* Products Dropdown */}
            <DropdownMenu open={isProductsOpen} onOpenChange={setIsProductsOpen}>
              <DropdownMenuTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none inline-flex items-center gap-1">
                {t('menu.products')}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={`/${locale}/chopping-and-marking-machine`}>{t('menu.choppingAndMarkingMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={`/${locale}/taping-and-packaging-machine`}>{t('menu.tapingAndPackagingMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={`/${locale}/wire-flattening-machine`}>{t('menu.wireFlatteningMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={`/${locale}/decoiler-machine`}>{t('menu.decoilerMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href={`/${locale}/wheel-weights`}>{t('menu.wheelWeights')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Links */}
            <Link href={`/${locale}/rotary-punch`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('menu.technology')}
            </Link>
            <Link href={`/${locale}/faq`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('menu.questions')}
            </Link>
            <Link href={`/${locale}/about-us`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('menu.about')}
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('menu.contact')}
            </Link>
            <Link href={`/${locale}/blogs`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {t('menu.blog')}
            </Link>

            {/* Websites Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none inline-flex items-center gap-1">
                {t('menu.websites')}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={locale === 'tr' ? "https://rotarypunch.com.tr/" : "https://rotarypunch.tech/"} target="_blank" rel="noopener noreferrer">{t('menu.rotaryPunchTechnology')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="https://www.cableladdertrays.com/" target="_blank" rel="noopener noreferrer">{t('menu.cableSupportSystems')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="https://www.yilsa.com.tr/" target="_blank" rel="noopener noreferrer">{t('menu.corporateWebsite')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quote Dialog for Desktop */}
            <QuoteDialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#0065A1] text-white hover:bg-[#1974aa] hover:text-white hidden lg:inline-flex" // Added classes here
                >
                  {t('menu.getQuote')}
                </Button>
              </DialogTrigger>
            </QuoteDialog>
          </div>

          {/* Right Side: Language Switcher (Desktop) & Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Trigger (Sheet) */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    <span className="sr-only">Menüyü Aç</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[350px] p-6 overflow-y-auto"> {/* Added width and padding */}
                  {/* Optional: Add SheetHeader if needed */}
                  {/* <SheetHeader><SheetTitle>Menu</SheetTitle></SheetHeader> */}
                  <nav className="flex flex-col space-y-4 mt-6"> {/* Added spacing */}
                    {/* Products Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="products">
                        <AccordionTrigger className="text-base font-medium hover:no-underline">
                          {t('menu.products')}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2"> {/* Indent content */}
                          <SheetClose asChild>
                            <Link href={`/${locale}/chopping-and-marking-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.choppingAndMarkingMachine')}</Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href={`/${locale}/taping-and-packaging-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.tapingAndPackagingMachine')}</Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href={`/${locale}/wire-flattening-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.wireFlatteningMachine')}</Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href={`/${locale}/decoiler-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.decoilerMachine')}</Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href={`/${locale}/wheel-weights`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.wheelWeights')}</Link>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Other Links */}
                    <SheetClose asChild>
                      <Link href={`/${locale}/rotary-punch`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.technology')}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={`/${locale}/faq`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.questions')}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={`/${locale}/about-us`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.about')}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#contact" className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.contact')}</Link>
                    </SheetClose>
                     <SheetClose asChild>
                       <Link href={`/${locale}/blogs`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.blog')}</Link>
                    </SheetClose>

                    {/* Websites Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="websites">
                        <AccordionTrigger className="text-base font-medium hover:no-underline">
                          {t('menu.websites')}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2">
                          <SheetClose asChild>
                             <Link href={locale === 'tr' ? "https://rotarypunch.com.tr/" : "https://rotarypunch.tech/"} target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.rotaryPunchTechnology')}</Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="https://www.cableladdertrays.com/" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.cableSupportSystems')}</Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link href="https://www.yilsa.com.tr/" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('menu.corporateWebsite')}</Link>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Language Switcher and Quote Dialog */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-4 items-stretch"> {/* Changed items-start to items-stretch */}
                      <LanguageSwitcher />
                      {/* Quote Dialog for Mobile */}
                      <QuoteDialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-[#0065A1] text-white hover:bg-[#1974aa] hover:text-white w-full" // Added classes here
                          >
                            {t('menu.getQuote')}
                          </Button>
                        </DialogTrigger>
                      </QuoteDialog>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
