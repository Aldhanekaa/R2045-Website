import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './navbar';
import PageContainer from '@/components/PageContainer';
import { FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Analytics } from '@vercel/analytics/react';

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
      <body
        className={`${inter.className} bg-slate-800 overflow-x-hidden relative`}
      >
        <Navbar />
        {children}
        <Analytics />
        <footer className=" bg-gradient-to-b from-yellow-500 to-yellow-600 text-slate-50 px-4 py-3 ">
          <PageContainer className="flex justify-between">
            <div>
              <span> ©2024 R2045. All Rights Reserved</span>
            </div>

            <div className="flex  gap-4">
              <a
                href="https://www.instagram.com/r2045.id/"
                aria-label="R2045 Instagram Page"
                target="_blank"
              >
                {' '}
                <FaInstagram className="text-xl " />
              </a>

              <a
                href="https://www.youtube.com/@R2045_ID"
                aria-label="R2045 Instagram Page"
                target="_blank"
              >
                <FaYoutube className="text-xl hover:text-slate-300" />
              </a>
            </div>
          </PageContainer>
        </footer>
      </body>
    </html>
  );
}
