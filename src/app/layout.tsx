import type { Metadata } from "next";
import { Poppins, Comfortaa } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-comfortaa",
});
export const metadata: Metadata = {
  title: "Molang Spline 3D",
  description: "Molang Spline 3D Model created by Ojuolape and Oluremi Bello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} ${comfortaa.variable}`}>
        {children}
      </body>
    </html>
  );
}
