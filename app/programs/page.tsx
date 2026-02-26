'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { programs } from '@/data/programs';
import type { Program } from '@/data/programs';

type Level = 'Все' | 'Бакалавриат' | 'Магистратура' | 'Специалитет';
type Form  = 'Все' | 'Очная' | 'Заочная' | 'Очно-заочная';
type Sort  = 'default' | 'score-asc' | 'score-desc' | 'price-asc';

export default function ProgramsPage() {
  const [search,   setSearch]   = useState('');
  const [level,    setLevel]    = useState<Level>('Все');
  const [form,     setForm]     = useState<Form>('Все');
  const [sort,     setSort]     = useState<Sort>('default');

  const filtered = useMemo<Program[]>(() => {
    let list = [...programs];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.subjects.some((s) => s.toLowerCase().includes(q)),
      );
    }

    if (level !== 'Все') list = list.filter((p) => p.level === level);
    if (form  !== 'Все') list = list.filter((p) => p.form  === form);

    switch (sort) {
      case 'score-asc':
        list = list.sort((a, b) => a.passingScore - b.passingScore);
        break;
      case 'score-desc':
        list = list.sort((a, b) => b.passingScore - a.passingScore);
        break;
      case 'price-asc':
        list = list.sort((a, b) =>
          parseInt(a.contractPrice) - parseInt(b.contractPrice),
        );
        break;
    }

    return list;
  }, [search, level, form, sort]);

  const levels: Level[] = ['Все', 'Бакалавриат', 'Магистратура', 'Специалитет'];
  const forms:  Form[]  = ['Все', 'Очная', 'Заочная', 'Очно-заочная'];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f1f3d] py-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-2">Обучение</p>
            <h1 className="text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Программы обучения
            </h1>
            <p className="text-blue-200 text-lg">
              Выберите направление подготовки — используйте фильтры или поиск
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Поиск */}
        <div className="relative mb-8">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по направлению, предмету..."
            className="input-field pl-12 text-base"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Фильтры (сайдбар) */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
              <h3 className="font-bold text-[#0f1f3d] mb-4 text-sm uppercase tracking-wider">Фильтры</h3>

              <div className="mb-6">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Уровень</p>
                <div className="flex flex-col gap-1.5">
                  {levels.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLevel(l)}
                      className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                        level === l
                          ? 'bg-[#1e4db7] text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Форма обучения</p>
                <div className="flex flex-col gap-1.5">
                  {forms.map((f) => (
                    <button
                      key={f}
                      onClick={() => setForm(f)}
                      className={`text-left text-sm px-3 py-2 rounded-lg transition-all ${
                        form === f
                          ? 'bg-[#1e4db7] text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Сортировка</p>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  className="input-field text-sm py-2"
                >
                  <option value="default">По умолчанию</option>
                  <option value="score-asc">Балл: от меньшего</option>
                  <option value="score-desc">Балл: от большего</option>
                  <option value="price-asc">Цена: от меньшей</option>
                </select>
              </div>

              {(search || level !== 'Все' || form !== 'Все') && (
                <button
                  onClick={() => { setSearch(''); setLevel('Все'); setForm('Все'); setSort('default'); }}
                  className="mt-4 text-sm text-red-500 hover:text-red-700 font-medium w-full text-center"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
          </aside>

          {/* Список программ */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">
                Найдено программ: <strong className="text-[#0f1f3d]">{filtered.length}</strong>
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-5xl mb-4">🔍</p>
                <p className="text-xl font-bold text-gray-700 mb-2">Ничего не найдено</p>
                <p className="text-gray-500">Попробуйте изменить запрос или сбросить фильтры</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filtered.map((program) => (
                  <Link
                    key={program.id}
                    href={`/programs/${program.slug}`}
                    className="card p-6 group block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{program.icon}</span>
                      <div className="flex gap-2 flex-wrap justify-end">
                        <span className="tag tag-blue">{program.level}</span>
                        <span className="tag" style={{ background: '#f3f4f6', color: '#6b7280' }}>{program.form}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-[#0f1f3d] text-lg mb-1 group-hover:text-[#1e4db7] transition-colors leading-snug">
                      {program.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">{program.code} · {program.duration}</p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.subjects.map((s) => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="border-t pt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400 text-xs mb-0.5">Проходной балл</p>
                        <p className="font-bold text-[#0f1f3d]">
                          {program.passingScore > 0 ? `${program.passingScore} б.` : 'Экзамен'}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-0.5">Бюджет / Платно</p>
                        <p className="font-bold text-[#0f1f3d]">
                          {program.budgetPlaces} / {program.paidPlaces} мест
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[#1e4db7] text-sm font-semibold">
                      Подробнее
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
