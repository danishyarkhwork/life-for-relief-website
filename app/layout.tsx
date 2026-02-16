import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Life for Relief & Development Canada",
    template: "%s | Life for Relief & Development Canada",
  },
  description:
    "Since 1994, Life for Relief & Development Canada has been committed to providing vital relief and sustainable development to the world's most vulnerable communities.",
  keywords: [
    "charity",
    "humanitarian",
    "relief",
    "Canada",
    "donation",
    "development",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1a7a4c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
