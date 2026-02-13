import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustConnect - Trust-First Dating & Social Connection Platform",
  description: "Build meaningful connections through verified identities and behavioral trust",
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
