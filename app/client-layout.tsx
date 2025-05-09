'use client';

import { type ReactNode } from 'react';
// Removed i18n imports: import { type Locale } from '@/i18n-config';
// Removed i18n imports: import { type Dictionary } from '@/types/i18n';
// Removed context import: import { TranslationProvider } from '@/contexts/translation-context';
import { ThemeProvider } from '@/components/theme-provider';
// Removed context import: import { LanguageProvider } from '@/contexts/language-context';
// Removed context import: import { LocationProvider } from '@/contexts/location-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SocialBar } from '@/components/social-bar';

interface ClientLayoutProps {
  children: ReactNode;
  // Removed dictionary prop
  // Removed locale prop
}

// Removed dictionary and locale from function signature
export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* Keeping LocationProvider, assuming it's not i18n related */}
      {/* LocationProvider wrapper removed */}
        {/* Removed LanguageProvider wrapper */}
        {/* Removed TranslationProvider wrapper */}
        <div className="flex min-h-screen flex-col">
          <Header />
          {/* Removed px-6 from here */}
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <SocialBar />
      {/* LocationProvider wrapper removed */}
    </ThemeProvider>
  );
}
