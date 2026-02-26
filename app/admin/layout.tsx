import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Настройки метаданных для SEO
export const metadata: Metadata = {
  title: "Экономический факультет ПГУ",
  description: "Официальный сайт экономического факультета ПГУ им. Т.Г. Шевченко",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* flex-1 растягивает контент, прижимая футер к низу */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}