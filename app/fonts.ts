import { Sen } from 'next/font/google';

export const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700', '800'], // Include needed weights
  variable: '--font-sen', // CSS variable name
  display: 'swap', // Optional
});