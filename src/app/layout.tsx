import "./styles/globals.css";
import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import SessionWrapper from '@/components/SessionWrapper';
import Header from '@/components/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trello-clone-app",
  description: "Do some tasks with trello-clone",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <SessionWrapper> */}
        <body className={inter.className}>
          {/* @ts-ignore */}
          <Header />

          <main className='p-8 h-[100%-80px]'>
            {children}
          </main>
        </body>
      {/* </SessionWrapper> */}
    </html>
  );
}
