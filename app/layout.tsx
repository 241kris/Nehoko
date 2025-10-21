"use client";

import { QueryClient } from '@tanstack/react-query';
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import "./globals.css";
import Providers from './providers';
 

const queryClient = new QueryClient();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="light"  >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}        
        </Providers>
      </body>
    </html>
  );
}
