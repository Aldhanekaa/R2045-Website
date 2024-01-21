import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'R2045 Robotics | Rendezvous 2045 Robotics Team',
  description: 'R2045 FIRST Tech Challenge Robotics Team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
