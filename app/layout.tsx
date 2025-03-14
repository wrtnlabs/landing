import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/layout/Footer";
import Header from "./_components/layout/Header";
import LenisProvider from "./provider/LenisProvider";

export const metadata: Metadata = {
  title: "Agentica",
  description: "Agentica Landing Page",
  keywords: ["agentica", "autoview"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030303]">
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
