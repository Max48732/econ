import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-white">
      {/* Верхняя полоска gold */}
      <div className="h-1 bg-gradient-to-r from-[#c9a227] via-[#f0c040] to-[#c9a227]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Бренд */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Экономический факультет
            </h3>
            <p className="text-sm text-gray-400 mb-1">ПГУ им. Т.Г. Шевченко</p>
            <div className="w-10 h-0.5 bg-[#c9a227] mb-5" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              Готовим профессиональных экономистов, менеджеров и управленцев с 1992 года. Качество, востребованность, перспектива.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#c9a227] transition-colors flex items-center justify-center text-sm font-bold"
              >
                VK
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#229ED9] transition-colors flex items-center justify-center text-sm font-bold"
              >
                TG
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-4">Разделы</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Программы обучения', href: '/programs' },
                { label: 'Абитуриентам',       href: '/admissions' },
                { label: 'Новости',             href: '/news' },
                { label: 'О факультете',        href: '/about' },
                { label: 'Контакты',            href: '/contacts' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0">📍</span>
                <span>г. Тирасполь, ул. 25 Октября, 128</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>📞</span>
                <a href="tel:+373533000000" className="hover:text-white transition-colors">
                  +373 (533) XX-XX-XX
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span>✉️</span>
                <a href="mailto:econom@pgu.ru" className="hover:text-white transition-colors">
                  econom@pgu.ru
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span>🕐</span>
                <span>Пн–Пт: 9:00–17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Экономический факультет ПГУ им. Т.Г. Шевченко</p>
          <p>Разработано в рамках учебного проекта</p>
        </div>
      </div>
    </footer>
  );
}
