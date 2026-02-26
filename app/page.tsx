'use client';
import Link from 'next/link';
import { useState } from 'react';
import { programs } from '@/data/programs';
import { admissionsTimeline } from '@/data/admissionsInfo';

// Калькулятор баллов
function ScoreCalculator() {
  const subjectOptions = [
    'Математика', 'Обществознание', 'Русский язык',
    'История', 'Иностранный язык', 'Информатика',
  ];

  const [scores, setScores] = useState<Record<string, number>>({
    'Русский язык': 0,
    'Математика': 0,
    'Обществознание': 0,
  });
  const [calculated, setCalculated] = useState(false);

  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  const suitable = programs.filter((p) => {
    if (p.passingScore === 0) return false;
    const subjectMatch = p.subjects.some((s) => scores[s] !== undefined);
    return subjectMatch && total >= p.passingScore - 20;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#1e4db7] flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#0f1f3d]">Калькулятор баллов</h3>
          <p className="text-sm text-gray-500">Введите баллы ЕГЭ — подберём программы</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {Object.keys(scores).map((subject) => (
          <div key={subject} className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700 w-36 flex-shrink-0">{subject}</label>
            <input
              type="number"
              min={0}
              max={100}
              value={scores[subject] || ''}
              onChange={(e) => setScores({ ...scores, [subject]: Number(e.target.value) })}
              className="input-field flex-1 text-center font-semibold"
              placeholder="0–100"
            />
            <span className="text-xs text-gray-400 w-16">из 100</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4 p-4 bg-[#f0f4ff] rounded-xl">
        <span className="text-sm font-medium text-gray-600">Сумма баллов:</span>
        <span className="text-2xl font-bold text-[#1e4db7]">{total}</span>
      </div>

      <button
        onClick={() => setCalculated(true)}
        className="btn-primary w-full text-center"
      >
        Подобрать программы 🎯
      </button>

      {calculated && (
        <div className="mt-5 animate-fadeInUp">
          {suitable.length > 0 ? (
            <>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                ✅ Подходящие программы ({suitable.length}):
              </p>
              <div className="space-y-2">
                {suitable.map((p) => (
                  <Link
                    key={p.id}
                    href={`/programs/${p.slug}`}
                    className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {p.icon} {p.name}
                    </span>
                    <span className="text-xs text-green-700 font-semibold">
                      от {p.passingScore} б.
                    </span>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500 text-center py-3">
              По вашим баллам подобрать программы не удалось. Попробуйте изменить предметы.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Новости
const newsItems = [
  {
    id: 1,
    title: 'Объявление о начале экзаменационной сессии',
    date: '25.02.2026',
    excerpt: 'Уважаемые студенты! Весенняя экзаменационная сессия начнётся 15 марта. Ознакомьтесь с расписанием.',
    tag: 'Учёба',
    tagColor: 'tag-blue',
  },
  {
    id: 2,
    title: 'Гостевая лекция от партнёра факультета',
    date: '20.02.2026',
    excerpt: 'Приглашаем всех желающих на открытую лекцию от представителей компании «ТехноПарк ПМР».',
    tag: 'Событие',
    tagColor: 'tag-gold',
  },
  {
    id: 3,
    title: 'Приём документов 2026 — изменения в правилах',
    date: '15.02.2026',
    excerpt: 'В связи с обновлением нормативной базы изменены сроки подачи заявлений. Подробности — внутри.',
    tag: 'Поступление',
    tagColor: 'tag-green',
  },
];

// Статистика
const stats = [
  { value: '30+', label: 'лет истории факультета' },
  { value: '4 000+', label: 'выпускников' },
  { value: '6', label: 'программ обучения' },
  { value: '95%', label: 'трудоустройство' },
];

// Таймлайн приёмной кампании
const timelineSteps = [
  { icon: '📝', title: 'Подача документов', desc: admissionsTimeline.documentSubmission.start + ' — ' + admissionsTimeline.documentSubmission.end, color: 'border-blue-400' },
  { icon: '✍️', title: 'Вступительные испытания', desc: admissionsTimeline.entranceExams.period, color: 'border-purple-400' },
  { icon: '📋', title: 'Завершение конкурса', desc: admissionsTimeline.competitionEnd, color: 'border-amber-400' },
  { icon: '🎓', title: 'Зачисление', desc: admissionsTimeline.enrollmentDeadline + ' после решения', color: 'border-green-400' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[88vh] flex items-center bg-[#0f1f3d] hero-pattern overflow-hidden">
        {/* Декор */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1e4db7]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#c9a227]/10 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">

            {/* Текст */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full px-4 py-1.5 mb-6 animate-fadeInUp">
                <span className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse" />
                <span className="text-[#f0c040] text-sm font-medium">Приём документов — 2026</span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp delay-100"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Экономический{' '}
                <span className="text-[#c9a227]">факультет</span>{' '}
                ПГУ
              </h1>

              <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-lg animate-fadeInUp delay-200">
                Качественное образование в сфере экономики, менеджмента и государственного управления. Твой путь к успешной карьере начинается здесь.
              </p>

              <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300">
                <Link href="/admissions" className="btn-gold">
                  Подать документы 🚀
                </Link>
                <Link href="/programs" className="btn-outline">
                  Программы обучения
                </Link>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 animate-fadeInUp delay-400">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-[#c9a227]">{stat.value}</p>
                    <p className="text-xs text-blue-300 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Калькулятор */}
            <div className="animate-fadeInUp delay-200">
              <ScoreCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ТАЙМЛАЙН ПРИЁМНОЙ КАМПАНИИ ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-2">Приём 2026</p>
            <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Этапы поступления
            </h2>
            <div className="section-divider mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, i) => (
              <div key={i} className={`card p-6 border-t-4 ${step.color}`}>
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Этап {i + 1}</div>
                <h3 className="font-bold text-[#0f1f3d] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ПРОГРАММЫ ═══ */}
      <section className="py-16 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-1">Обучение</p>
              <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Популярные программы
              </h2>
            </div>
            <Link href="/programs" className="btn-primary text-sm whitespace-nowrap">
              Все программы →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.filter((p) => p.popular).concat(programs.slice(2, 4)).slice(0, 3).map((program) => (
              <Link key={program.id} href={`/programs/${program.slug}`} className="card p-6 group block">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{program.icon}</span>
                  <div>
                    <span className="tag tag-blue">{program.level}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0f1f3d] mb-2 group-hover:text-[#1e4db7] transition-colors">
                  {program.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{program.description}</p>
                <div className="flex items-center justify-between text-sm border-t pt-4">
                  <span className="text-gray-500">Проходной: <strong className="text-[#0f1f3d]">{program.passingScore} б.</strong></span>
                  <span className="text-[#1e4db7] font-semibold group-hover:translate-x-1 transition-transform inline-block">
                    Подробнее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ НОВОСТИ ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-1">Факультет</p>
              <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Последние новости
              </h2>
            </div>
            <Link href="/news" className="btn-primary text-sm whitespace-nowrap">
              Все новости →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <article key={news.id} className="card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`tag ${news.tagColor}`}>{news.tag}</span>
                  <span className="text-xs text-gray-400">{news.date}</span>
                </div>
                <h3 className="font-bold text-[#0f1f3d] mb-3 group-hover:text-[#1e4db7] transition-colors leading-snug">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{news.excerpt}</p>
                <Link href="/news" className="text-sm text-[#1e4db7] font-semibold hover:underline inline-flex items-center gap-1">
                  Читать далее
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-[#0f1f3d] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Готовы начать свой путь?
          </h2>
          <p className="text-blue-300 mb-8 text-lg">
            Подайте документы онлайн и станьте частью экономического факультета ПГУ
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/cabinet" className="btn-gold">
              Личный кабинет абитуриента
            </Link>
            <Link href="/contacts" className="btn-outline">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
