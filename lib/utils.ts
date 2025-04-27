import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react'; // Import React

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to render HTML tags from translation strings safely
export function renderHTML(text: string): React.ReactNode {
  if (!text) return null;

  const parts = text.split(/(<b>.*?<\/b>|<a href='.*?'>(.*?)<\/a>)/g);

  return parts.map((part, index) => {
    if (!part) return null;

    // Handle <b> tags
    const boldMatch = part.match(/<b>(.*?)<\/b>/);
    if (boldMatch) {
      return React.createElement('strong', { key: index }, boldMatch[1]);
    }

    // Handle <a> tags
    const linkMatch = part.match(/<a href='(.*?)'>(.*?)<\/a>/);
    if (linkMatch) {
      const href = linkMatch[1];
      const content = linkMatch[2];
      // Render as an actual anchor tag for standard behavior.
      return React.createElement(
        'a',
        {
          key: index,
          href: href,
          target: '_blank', // Open in new tab for external links
          rel: 'noopener noreferrer', // Security best practice
          className: 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline hover:no-underline transition-colors duration-200', // Added underline for link clarity
        },
        content
      );
    }

    // Return plain text parts
    // Avoid rendering empty strings or parts that were just delimiters
    if (!part.startsWith('<') && part.trim() !== '') {
       // Replace potential escaped characters if necessary, e.g., & -> &
       // For now, assume simple text
       return part;
    }

    return null; // Ignore delimiters or empty parts
  }).filter(Boolean); // Remove null entries
}
