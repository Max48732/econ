import { programs } from '@/data/programs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const program = programs.find((p) => p.slug === id);
  if (!program) return { title: 'Программа не найдена' };
  return {
    title: program.name,
    description: program.description,
  };
}

export async function generateStaticParams() {
  return programs.map((p) => ({ id: p.slug }));
}

export default async function ProgramPage({ params }: Props) {
  const { id } = await params;
  const program = programs.find((p) => p.slug === id);

  if (!program) notFound();

  const stickyNavItems = [
    { href: '#description', label: 'Описание' },
    { href: '#professions', label: 'Профессии' },
    { href: '#scores',      label: 'Баллы' },
    { href: '#apply',       label: 'Подать заявку' },
  ];

  return (
    <div className="min-h-screen">

      {/* Breadcrumb + Hero */}
      <div className="bg-[#0f1f3d] hero-pattern pb-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-white transition-colors">Программы</Link>
            <span>/</span>
            <span className="text-white">{program.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-blue">{program.level}</span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
                  {program.form}
                </span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
                  {program.duration}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {program.icon} {program.name}
              </h1>
              <p className="text-blue-300 text-base">{program.code}</p>
            </div>

            {/* Быстрые факты */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 min-w-72">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#c9a227]">
                    {program.passingScore > 0 ? program.passingScore : '—'}
                  </p>
                  <p className="text-xs text-blue-300 mt-1">Проходной балл</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#c9a227]">{program.budgetPlaces}</p>
                  <p className="text-xs text-blue-300 mt-1">Бюджетных мест</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#c9a227]">{program.paidPlaces}</p>
                  <p className="text-xs text-blue-300 mt-1">Платных мест</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#c9a227]">{program.duration}</p>
                  <p className="text-xs text-blue-300 mt-1">Срок обучения</p>
                </div>
              </div>
              <Link href="/cabinet" className="btn-gold w-full text-center mt-5 block">
                Подать заявку
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-1">
            {stickyNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex-shrink-0 px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#1e4db7] transition-colors border-b-2 border-transparent hover:border-[#1e4db7]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* Описание */}
            <section id="description">
              <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Описание программы
              </h2>
              <div className="w-10 h-0.5 bg-[#c9a227] mb-6" />
              <p className="text-gray-600 leading-relaxed text-base">
                {program.description}
              </p>
            </section>

            {/* Профессии */}
            <section id="professions">
              <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Куда идут выпускники
              </h2>
              <div className="w-10 h-0.5 bg-[#c9a227] mb-6" />
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
                {program.professions.map((prof) => (
                  <div key={prof} className="card p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#1e4db7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{prof}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                <p className="text-sm text-gray-600">
                  Средняя зарплата выпускников:{' '}
                  <strong className="text-green-700">{program.salaryRange}</strong>
                </p>
              </div>
            </section>

            {/* Баллы и предметы */}
            <section id="scores">
              <h2 className="text-2xl font-bold text-[#0f1f3d] mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Вступительные испытания
              </h2>
              <div className="w-10 h-0.5 bg-[#c9a227] mb-6" />
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0f1f3d] text-white">
                      <th className="text-left px-6 py-4 font-semibold">Предмет</th>
                      <th className="text-center px-6 py-4 font-semibold">Форма</th>
                      <th className="text-center px-6 py-4 font-semibold">Мин. балл</th>
                    </tr>
                  </thead>
                  <tbody>
                    {program.subjects.map((subj, i) => (
                      <tr key={subj} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-gray-700">{subj}</td>
                        <td className="px-6 py-4 text-center text-gray-500">ЕГЭ</td>
                        <td className="px-6 py-4 text-center font-bold text-[#1e4db7]">36</td>
                      </tr>
                    ))}
                    <tr className="bg-[#0f1f3d]/5 border-t-2 border-[#c9a227]">
                      <td colSpan={2} className="px-6 py-4 font-bold text-[#0f1f3d]">Проходной балл (2025)</td>
                      <td className="px-6 py-4 text-center font-bold text-2xl text-[#c9a227]">
                        {program.passingScore > 0 ? program.passingScore : 'Экзамен'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Сайдбар */}
          <aside id="apply" className="space-y-5">
            {/* Подать заявку */}
            <div className="bg-[#0f1f3d] rounded-2xl p-6 text-white sticky top-28">
              <h3 className="font-bold text-lg mb-1">Готовы поступить?</h3>
              <p className="text-blue-300 text-sm mb-5">Подайте заявку онлайн через Личный кабинет</p>
              <Link href="/cabinet" className="btn-gold block text-center mb-3">
                Подать заявку
              </Link>
              <Link
                href="/admissions"
                className="block text-center text-sm text-blue-300 hover:text-white transition-colors"
              >
                Информация для абитуриентов →
              </Link>
            </div>

            {/* Стоимость */}
            <div className="card p-5">
              <h4 className="font-bold text-[#0f1f3d] mb-3">Стоимость обучения</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Бюджет</span>
                  <span className="font-bold text-green-600">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Договор</span>
                  <span className="font-bold text-[#0f1f3d]">{program.contractPrice}</span>
                </div>
              </div>
            </div>

            {/* Другие программы */}
            <div className="card p-5">
              <h4 className="font-bold text-[#0f1f3d] mb-3">Другие программы</h4>
              <div className="space-y-2">
                {programs
                  .filter((p) => p.id !== program.id)
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/programs/${p.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1e4db7] transition-colors py-1"
                    >
                      <span>{p.icon}</span>
                      <span>{p.name}</span>
                    </Link>
                  ))}
              </div>
              <Link href="/programs" className="text-sm text-[#1e4db7] font-semibold hover:underline mt-3 block">
                Все программы →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
