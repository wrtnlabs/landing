
import { Head } from "nextra/components";
import type { Metadata } from "next";
import Footer from "./_components/layout/Footer";
import ToastProvider from "./_providers/ToastProvider";
import "./globals.css";


export const metadata: Metadata = {
  title: "Wrtnlabs",
  description: "The Foundation for Every Business Agent",
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
        <main>{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html >
  );
}
