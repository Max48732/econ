'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Логотип и название */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/Pgy.png" 
                alt="Логотип ПГУ" 
                width={55} 
                height={55}
                className="object-contain transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Экономический факультет
              </h1>
              <p className="text-xs text-gray-600">
                ПГУ им. Т.Г. Шевченко
              </p>
            </div>
          </Link>

          {/* Навигация */}
          <nav>
            <ul className="flex space-x-1">
              {['Главная', 'Новости', 'Программы', 'Абитуриенту', 'О факультете', 'Контакты'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item === 'Главная' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full group-hover:left-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}