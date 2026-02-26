import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'О факультете',
  description: 'История, миссия и преимущества экономического факультета ПГУ',
};

const advantages = [
  { icon: '🎓', title: 'Опытные преподаватели', desc: 'Кандидаты и доктора наук с практическим опытом в бизнесе и государственном управлении' },
  { icon: '🤝', title: 'Партнёры из бизнеса', desc: 'Стажировки и практика на предприятиях ПМР — реальный опыт ещё во время учёбы' },
  { icon: '💻', title: 'Современные методы', desc: 'Кейс-методы, деловые игры, проектная работа и цифровые инструменты обучения' },
  { icon: '🌍', title: 'Международные связи', desc: 'Партнёрство с университетами России, сотрудничество в научных исследованиях' },
  { icon: '📊', title: 'Практическая база', desc: 'Собственный компьютерный класс с лицензионным ПО для экономических расчётов' },
  { icon: '🏆', title: 'Научная деятельность', desc: 'Студенческие конференции, публикации и участие в республиканских олимпиадах' },
];

const leadership = [
  { name: 'Иванов Иван Иванович',   role: 'Декан факультета',    degree: 'д.э.н., профессор' },
  { name: 'Петрова Мария Сергеевна', role: 'Зам. декана по учебной работе', degree: 'к.э.н., доцент' },
  { name: 'Сидоров Алексей Петрович', role: 'Зав. кафедрой экономики', degree: 'д.э.н., профессор' },
  { name: 'Козлова Наталья Владимировна', role: 'Зав. кафедрой менеджмента', degree: 'к.э.н., доцент' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f1f3d] hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-2">История и миссия</p>
            <h1 className="text-5xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              О факультете
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Экономический факультет ПГУ им. Т.Г. Шевченко — ведущий центр экономического образования в Приднестровье с более чем 30-летней историей.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* История */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-2">С 1992 года</p>
              <h2 className="text-3xl font-bold text-[#0f1f3d] mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Экономический факультет был основан в 1992 году как одно из первых подразделений Приднестровского государственного университета. С первых дней существования факультет поставил цель — готовить высококвалифицированных специалистов в области экономики и управления для нужд молодой республики.
                </p>
                <p>
                  За годы работы факультет подготовил более 4 000 выпускников, многие из которых занимают ключевые должности в государственных структурах, бизнесе и банковском секторе ПМР.
                </p>
                <p>
                  Сегодня факультет предлагает 6 образовательных программ на уровнях бакалавриата и магистратуры, ведёт активную научную деятельность и развивает международное сотрудничество.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1992', label: 'Год основания' },
                { value: '4 000+', label: 'Выпускников' },
                { value: '40+', label: 'Преподавателей' },
                { value: '95%', label: 'Трудоустройство' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0f1f3d] rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-[#c9a227] mb-2">{stat.value}</p>
                  <p className="text-sm text-blue-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#c9a227] mb-2">Почему мы</p>
            <h2 className="text-3xl font-bold text-[#0f1f3d]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Наши преимущества
            </h2>
            <div className="section-divider mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <div key={adv.title} className="card p-6">
                <span className="text-3xl mb-4 block">{adv.icon}</span>
                <h3 className="font-bold text-[#0f1f3d] mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Руководство */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f1f3d]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Руководство факультета
            </h2>
            <div className="section-divider mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((person) => (
              <div key={person.name} className="card p-5 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e4db7] to-[#0f1f3d] flex items-center justify-center text-2xl text-white mx-auto mb-4">
                  👤
                </div>
                <h3 className="font-bold text-[#0f1f3d] text-sm leading-snug mb-1">{person.name}</h3>
                <p className="text-xs text-[#1e4db7] font-medium mb-1">{person.role}</p>
                <p className="text-xs text-gray-400">{person.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f1f3d] rounded-3xl p-10 text-center hero-pattern">
          <h2 className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Присоединяйтесь к нам
          </h2>
          <p className="text-blue-300 mb-8 max-w-xl mx-auto">
            Станьте частью факультета с богатой историей и яркими перспективами для вашей карьеры
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/admissions" className="btn-gold">Информация для абитуриентов</Link>
            <Link href="/contacts"   className="btn-outline">Связаться с нами</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
