import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // ✅ lebih cepat saat load font
  variable: '--font-inter', // optional kalau mau pakai CSS variable
});

export const metadata: Metadata = {
  title: 'Yasmin Putri Sujono – Portfolio',
  description:
    'Informatics Engineering student passionate about software development, UI/UX design, and data-driven solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
