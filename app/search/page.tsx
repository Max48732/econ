'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo, Suspense } from 'react';
import Link from 'next/link';
import { programs } from '@/data/programs';

const allContent = [
  ...programs.map((p) => ({
    type: 'Программа',
    title: p.name,
    desc: p.description,
    href: `/programs/${p.slug}`,
    icon: p.icon,
    tags: p.subjects,
  })),
  {
    type: 'Страница',
    title: 'Абитуриентам',
    desc: 'Сроки приёма, необходимые документы, льготы, порядок поступления.',
    href: '/admissions',
    icon: '📋',
    tags: ['поступление', 'документы', 'льготы'],
  },
  {
    type: 'Страница',
    title: 'Личный кабинет',
    desc: 'Подача заявления онлайн, трекинг статуса, загрузка документов.',
    href: '/cabinet',
    icon: '🔑',
    tags: ['заявление', 'подача', 'онлайн'],
  },
  {
    type: 'Страница',
    title: 'Контакты',
    desc: 'Адрес, телефоны, email деканата и приёмной комиссии.',
    href: '/contacts',
    icon: '📞',
    tags: ['деканат', 'телефон', 'адрес'],
  },
  {
    type: 'Страница',
    title: 'О факультете',
    desc: 'История, руководство, преимущества экономического факультета ПГУ.',
    href: '/about',
    icon: '🏛️',
    tags: ['история', 'декан', 'преподаватели'],
  },
];

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '**$1**').split('**').map((part, i) =>
    re.test(part) ? <mark key={i} className="bg-yellow-200 text-yellow-900 rounded px-0.5">{part}</mark> : part
  );
}

function SearchResults() {
  const params = useSearchParams();
  const query  = params.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="min-h-screen">
      <div className="bg-[#0f1f3d] hero-pattern py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-2">Поиск</p>
          <h1 className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {query ? `Результаты для «${query}»` : 'Поиск по сайту'}
          </h1>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              defaultValue={query}
              placeholder="Введите запрос..."
              className="input-field pl-12 text-base"
              onKeyDown={(e) => {
                const target = e.target as HTMLInputElement;
                if (e.key === 'Enter' && target.value.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(target.value)}`;
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!query ? (
          <div className="text-center py-16">
            <span className="text-5xl">🔍</span>
            <p className="mt-4 text-gray-500">Введите запрос для поиска</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl">😔</span>
            <p className="mt-4 text-xl font-bold text-gray-700">Ничего не найдено</p>
            <p className="text-gray-500 mt-2">Попробуйте изменить запрос</p>
            <Link href="/programs" className="btn-primary inline-block mt-6">
              Перейти к программам
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6">
              Найдено: <strong className="text-[#0f1f3d]">{results.length}</strong>
            </p>
            <div className="space-y-4">
              {results.map((item, i) => (
                <Link key={i} href={item.href} className="card p-5 flex gap-4 group block">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="tag tag-blue text-xs">{item.type}</span>
                    </div>
                    <h3 className="font-bold text-[#0f1f3d] group-hover:text-[#1e4db7] transition-colors mb-1">
                      {highlight(item.title, query)}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {highlight(item.desc, query)}
                    </p>
                    <p className="text-xs text-[#1e4db7] mt-2">{item.href}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Загрузка...</div></div>}>
      <SearchResults />
    </Suspense>
  );
}
