import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Экономический факультет ПГУ им. Т.Г. Шевченко',
    template: '%s | Экономический факультет ПГУ',
  },
  description:
    'Официальный сайт экономического факультета ПГУ им. Т.Г. Шевченко. Бакалавриат, магистратура, документы для поступления, личный кабинет абитуриента.',
  keywords: ['ПГУ', 'экономический факультет', 'Тирасполь', 'поступление', 'бакалавриат', 'магистратура'],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Экономический факультет ПГУ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#fafaf7]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
