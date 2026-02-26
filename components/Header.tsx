'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Главная',       href: '/' },
  { label: 'Программы',     href: '/programs' },
  { label: 'Абитуриентам',  href: '/admissions' },
  { label: 'Новости',       href: '/news' },
  { label: 'О факультете',  href: '/about' },
  { label: 'Контакты',      href: '/contacts' },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [searchQuery,  setSearchQuery]  = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрывать мобильное меню при навигации
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-[0_2px_24px_rgba(15,31,61,0.1)]'
            : 'bg-white/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Лого */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/Pgy.png"
                  alt="Логотип ПГУ"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-base lg:text-lg font-bold leading-tight text-[#0f1f3d]"
                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Экономический факультет
                </p>
                <p className="text-xs text-gray-500 leading-tight">ПГУ им. Т.Г. Шевченко</p>
              </div>
            </Link>

            {/* Десктоп-навигация */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#1e4db7] bg-blue-50'
                        : 'text-gray-600 hover:text-[#1e4db7] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#c9a227] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center gap-2">
              {/* Поиск (десктоп) */}
              <div className="hidden lg:flex items-center">
                {searchOpen ? (
                  <div className="flex items-center gap-2 animate-fadeIn">
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Поиск по сайту..."
                      className="input-field w-52 text-sm py-2"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchQuery.trim()) {
                          window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                        }
                        if (e.key === 'Escape') setSearchOpen(false);
                      }}
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="p-2 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-gray-500 hover:text-[#1e4db7] transition-colors"
                    aria-label="Поиск"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Личный кабинет */}
              <Link
                href="/cabinet"
                className="hidden lg:flex btn-primary text-sm py-2 px-5 gap-2 items-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Личный кабинет
              </Link>

              {/* Бургер */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Открыть меню"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {/* Поиск в мобайл */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Поиск по сайту..."
                  className="input-field text-sm"
                  onKeyDown={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (e.key === 'Enter' && target.value.trim()) {
                      window.location.href = `/search?q=${encodeURIComponent(target.value)}`;
                    }
                  }}
                />
              </div>
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#1e4db7]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/cabinet"
                className="mt-2 btn-primary text-center text-sm"
              >
                Личный кабинет
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
