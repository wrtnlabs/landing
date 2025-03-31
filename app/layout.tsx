import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/layout/Footer";
import Header from "./_components/layout/Header";

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
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
