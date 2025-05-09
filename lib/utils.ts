import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react'; // Import React

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


