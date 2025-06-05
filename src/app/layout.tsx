import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { fontSans } from "../config/fonts";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/utils";


export const metadata: Metadata = {
  title: "Página inicial",
  description: "Aplicación para CV y Portafolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en"  >
      <head />
      <body className={cn("bg-default-50 font-sans antialiased print:bg-white", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          <main className="min-h-screen mx-auto max-w-7xl flex justify-center print:p-0">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
