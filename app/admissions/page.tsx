import type { Metadata } from 'next';
import Link from 'next/link';
import { admissionsTimeline, requiredDocuments, benefits } from '@/data/admissionsInfo';

export const metadata: Metadata = {
  title: 'Абитуриентам',
  description: 'Всё о поступлении на экономический факультет ПГУ: сроки, документы, льготы.',
};

const timelineSteps = [
  {
    icon: '📝',
    title: 'Прием документов',
    period: `${admissionsTimeline.documentSubmission.start} — ${admissionsTimeline.documentSubmission.end}`,
    color: 'bg-blue-500',
    num: '01',
  },
  {
    icon: '✍️',
    title: 'Вступительные испытания',
    period: admissionsTimeline.entranceExams.period,
    color: 'bg-purple-500',
    num: '02',
  },
  {
    icon: '📋',
    title: 'Завершение конкурса',
    period: admissionsTimeline.competitionEnd,
    color: 'bg-amber-500',
    num: '03',
  },
  {
    icon: '🎓',
    title: 'Зачисление',
    period: `В течение ${admissionsTimeline.enrollmentDeadline}`,
    color: 'bg-green-500',
    num: '04',
  },
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f1f3d] hero-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-2">Поступление</p>
          <h1 className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Абитуриентам
          </h1>
          <p className="text-blue-200 max-w-2xl text-lg">
            Вся информация о поступлении на экономический факультет ПГУ — сроки, документы, льготы и онлайн-подача заявления.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Этапы поступления */}
        <section>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-2">Приёмная кампания 2026</p>
            <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Этапы поступления
            </h2>
            <div className="section-divider mt-3" />
          </div>

          <div className="relative">
            {/* Линия */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineSteps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    <span className="text-3xl">{step.icon}</span>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0f1f3d] mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Документы */}
        <section>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-2">Документы</p>
              <h2 className="text-3xl font-bold text-[#0f1f3d] mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Необходимые документы
              </h2>
              <div className="space-y-3">
                {requiredDocuments.map((doc, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <span className="w-7 h-7 rounded-lg bg-[#1e4db7] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Без экзаменов */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">🎓</span> Без вступительных испытаний
                </h3>
                <ul className="space-y-2">
                  {benefits.withoutExams.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Вне конкурса */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">⭐</span> Вне конкурса
                </h3>
                <ul className="space-y-2">
                  {benefits.withoutCompetition.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Дополнительные баллы */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Дополнительные баллы
            </h2>
            <div className="section-divider mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.additionalPoints.map((item, i) => (
              <div key={i} className="card p-5 flex items-center justify-between gap-4">
                <p className="text-sm text-gray-700 font-medium leading-snug">{item.achievement}</p>
                <div className="flex-shrink-0 text-2xl font-bold text-[#c9a227] bg-amber-50 w-14 h-14 rounded-xl flex items-center justify-center">
                  +{item.points}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f1f3d] rounded-3xl p-10 text-center hero-pattern">
          <h2 className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Готовы подать документы?
          </h2>
          <p className="text-blue-300 mb-8">
            Воспользуйтесь личным кабинетом для онлайн-подачи заявления
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/cabinet" className="btn-gold">
              Подать заявку онлайн 🚀
            </Link>
            <Link href="/programs" className="btn-outline">
              Выбрать направление
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
