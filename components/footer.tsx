'use client';
import Link from "next/link"
// Removed useTranslations import

export function Footer() {
  // Removed useTranslations hook call

  return (
    <footer className="w-full bg-gray-100 border-t">
      <div className="container py-4 mx-auto flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} YILSA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
