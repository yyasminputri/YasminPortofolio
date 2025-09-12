import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasmin Putri Sujono - Portfolio",
  description: "Fullstack Developer | UI/UX Designer | Data Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}