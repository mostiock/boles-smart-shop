import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { ComparisonProvider } from "@/contexts/ComparisonContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOLES Enterprise - Smart Home Devices Shop",
  description: "Shop the latest smart home devices, security cameras, smart lighting, and automation solutions from BOLES Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <CurrencyProvider>
            <AuthProvider>
              <SearchProvider>
                <ComparisonProvider>
                  <CartProvider>
                    {children}
                  </CartProvider>
                </ComparisonProvider>
              </SearchProvider>
            </AuthProvider>
          </CurrencyProvider>
        </ClientBody>
      </body>
    </html>
  );
}
