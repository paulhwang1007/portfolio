import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a standard modern font
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paul Hwang | Developer Portfolio",
  description: "Personal portfolio of Paul Hwang, a standard developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
