'use client';
import Link from 'next/link';

// Данные-заглушки
const newsItems = [
  {
    id: 1,
    title: "Объявление о начале экзаменационной сессии",
    date: "25.02.2026",
    excerpt: "Уважаемые студенты! Весенняя экзаменационная сессия начнется...",
    icon: "📚"
  },
  {
    id: 2,
    title: "Гостевая лекция от партнера факультета",
    date: "20.02.2026",
    excerpt: "Приглашаем всех желающих на открытую лекцию от представителей...",
    icon: "🎓"
  },
  {
    id: 3,
    title: "Изменения в расписании",
    date: "15.02.2026",
    excerpt: "Внимание! В расписание учебных занятий внесены изменения...",
    icon: "📅"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white mt-16">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Добро пожаловать на <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                экономический факультет!
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              ПГУ им. Т.Г. Шевченко — качественное образование и яркие перспективы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/admissions" 
                className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl inline-block"
              >
                Подать документы 🚀
              </Link>
              <Link 
                href="/programs" 
                className="px-8 py-4 rounded-full text-lg font-semibold bg-white/20 backdrop-blur-md border-2 border-white/50 hover:bg-white/30 transition-all inline-block"
              >
                Направления подготовки 📖
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Новости */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Последние новости</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <article
                key={news.id}
                className="card-hover bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{news.icon}</div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                  {news.date}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link 
                  href="/news" 
                  className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors"
                >
                  Читать далее 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать свой путь?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Подайте документы прямо сейчас и станьте частью нашей большой семьи!
          </p>
          <Link 
            href="/admissions" 
            className="inline-block btn-gradient px-10 py-4 rounded-full text-lg font-semibold shadow-2xl"
          >
            Стать студентом ПГУ 🎓
          </Link>
        </div>
      </section>
    </div>
  );
}