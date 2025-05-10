'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ChevronDown, Facebook, Instagram, Youtube } from 'lucide-react'; // Added social icons
// Removed LanguageSwitcher import
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
// Removed useTranslations import
import { usePathname } from 'next/navigation';

export function Header() {
  // Removed isMenuOpen state
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Kept for desktop dropdown
  // Removed locale and t from useTranslations
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
          <Link href={`/`} className="flex-shrink-0 flex items-center cursor-pointer"> {/* Removed locale */}
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
                <span>
                  Products {/* Hardcoded */}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={`/chopping-and-marking-machine`}>Chopping and Marking Machine</Link> {/* Hardcoded & removed locale */}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={`/taping-and-packaging-machine`}>Taping and Packaging Machine</Link> {/* Hardcoded & removed locale */}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={`/wire-flattening-machine`}>Wire Flattening Machine</Link> {/* Hardcoded & removed locale */}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={`/decoiler-machine`}>Decoiler Machine</Link> {/* Hardcoded & removed locale */}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={`/wheel-weights`}>Wheel Weights</Link> {/* Hardcoded & removed locale */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Links */}
            <Link href={`/rotary-punch`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Technology {/* Hardcoded */}
            </Link>
            <Link href={`/faq`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Questions {/* Hardcoded */}
            </Link>
            <Link href={`/about-us`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              About {/* Hardcoded */}
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact {/* Hardcoded */}
            </Link>
            <Link href={`/blogs`} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Blog {/* Hardcoded */}
            </Link>

            {/* Websites Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none inline-flex items-center gap-1">
                <span>
                  Websites {/* Hardcoded */}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={"https://rotarypunch.tech/"} target="_blank" rel="noopener noreferrer">Rotary Punch Technology</Link> {/* Hardcoded & removed locale condition */}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="https://www.cableladdertrays.com/" target="_blank" rel="noopener noreferrer">Cable Support Systems</Link> {/* Hardcoded */}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="https://www.yilsa.com.tr/" target="_blank" rel="noopener noreferrer">Corporate Website</Link> {/* Hardcoded */}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quote Dialog for Desktop */}
            <QuoteDialog>
              <DialogTrigger className="hidden lg:inline-flex">
                <span className="inline-flex justify-center rounded-md bg-[#0065A1] px-4 py-2 text-sm font-medium text-white hover:bg-[#1974aa] focus:outline-none">
                  Get a Quote
                </span>
              </DialogTrigger>
            </QuoteDialog>
          </div>

          {/* Right Side: Language Switcher (Desktop) & Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Removed Language Switcher */}

            {/* Mobile Menu Trigger (Sheet) */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300 cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[350px] p-6 overflow-y-auto"> {/* Added width and padding */}
                  {/* Optional: Add SheetHeader if needed */}
                  {/* <SheetHeader><SheetTitle>Menu</SheetTitle></SheetHeader> */}
                  <nav className="flex flex-col space-y-4 mt-6"> {/* Added spacing */}
                    {/* Products Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="products">
                        <AccordionTrigger className="text-base font-medium hover:no-underline text-left">
                          <span>Products</span> {/* Hardcoded */}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2"> {/* Indent content */}
                          <SheetClose>
                            <Link href={`/chopping-and-marking-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Chopping and Marking Machine</Link>
                          </SheetClose>
                          <SheetClose>
                            <Link href={`/taping-and-packaging-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Taping and Packaging Machine</Link>
                          </SheetClose>
                          <SheetClose>
                            <Link href={`/wire-flattening-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Wire Flattening Machine</Link>
                          </SheetClose>
                          <SheetClose>
                            <Link href={`/decoiler-machine`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Decoiler Machine</Link>
                          </SheetClose>
                          <SheetClose>
                            <Link href={`/wheel-weights`} className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Wheel Weights</Link>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Other Links */}
                    <SheetClose>
                      <Link href={`/rotary-punch`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Technology</Link>
                    </SheetClose>
                    <SheetClose>
                      <Link href={`/faq`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Questions</Link>
                    </SheetClose>
                    <SheetClose>
                      <Link href={`/about-us`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">About</Link>
                    </SheetClose>
                    <SheetClose>
                      <Link href="#contact" className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Contact</Link>
                    </SheetClose>
                    <SheetClose>
                      <Link href={`/blogs`} className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Blog</Link>
                    </SheetClose>

                    {/* Websites Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="websites">
                        <AccordionTrigger className="text-base font-medium hover:no-underline text-left">
                          <span>Websites</span> {/* Hardcoded */}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2">
                          <SheetClose>
                            <Link href={"https://rotarypunch.tech/"} target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Rotary Punch Technology</Link>
                          </SheetClose>
                          <SheetClose>
                            <Link href="https://www.cableladdertrays.com/" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Cable Support Systems</Link>
                          </SheetClose>
                          <SheetClose>
                            <Link href="https://www.yilsa.com.tr/" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-left w-full">Corporate Website</Link>
                          </SheetClose>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Language Switcher and Quote Dialog */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-4 items-stretch"> {/* Changed items-start to items-stretch */}
                      {/* Removed Language Switcher */}
                      {/* Quote Dialog for Mobile */}
                      <QuoteDialog>
                        <DialogTrigger className="w-full">
                          <span className="inline-flex w-full justify-center rounded-md bg-[#0065A1] px-4 py-2 text-sm font-medium text-white hover:bg-[#1974aa] focus:outline-none">
                            Get a Quote
                          </span>
                        </DialogTrigger>
                      </QuoteDialog>
                      {/* Mobile Social Links */}
                      <div className="flex justify-center items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                         <a
                          href="https://www.facebook.com/wheelweightsmachine"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="text-gray-600 hover:text-[#0065A1] transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <Facebook className="w-5 h-5" /> {/* Slightly larger icon */}
                        </a>
                        <a
                          href="https://x.com/wheelweightsmac"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="X (Twitter)"
                           className="text-gray-600 hover:text-[#0065A1] transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-5 h-5" /* Slightly larger icon */
                            fill="currentColor"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/wheelweightsmachine/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                           className="text-gray-600 hover:text-[#0065A1] transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <Instagram className="w-5 h-5" /> {/* Slightly larger icon */}
                        </a>
                        <a
                          href="https://www.youtube.com/@yldzendustriyel7549"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Youtube"
                           className="text-gray-600 hover:text-[#0065A1] transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          <Youtube className="w-5 h-5" /> {/* Slightly larger icon */}
                        </a>
                      </div>
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
