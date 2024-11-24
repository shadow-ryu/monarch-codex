import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/query/provider";
import { Sword } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dev Saga",
  description: "Code. Level Up. Conquer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Toaster />
          <footer className="border-t border-slate-200 dark:border-slate-700">
            <div className="container mx-auto px-6 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sword className="w-6 h-6 text-purple-600" />
                  <span className="font-bold text-white">
                    Dev <i>Saga</i>.
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  © 2024 Dev <i>Saga</i>. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
