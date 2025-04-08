
import { Head } from "nextra/components";
import type { Metadata } from "next";
import Footer from "./_components/layout/Footer";
import Header from "./_components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Wrtnlabs",
  description: "Wrtnlabs Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  );
}
