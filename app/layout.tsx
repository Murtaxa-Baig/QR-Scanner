import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR Code Generator · Scanner & Generator by AppNaya",
  description:
    "QR Code Scanner & Generator by AppNaya Technologies. Easily scan, read, and generate QR codes and barcodes. Securely save your scan history and customize your profile.",
  verification: {
    google: "4edXJTMyV4nhq0qY_zalMGnNG0QlH5oEJP6IiO_9qlY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4edXJTMyV4nhq0qY_zalMGnNG0QlH5oEJP6IiO_9qlY" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
