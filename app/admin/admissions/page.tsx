'use client';
import { admissionsTimeline, requiredDocuments, benefits } from '@/data/admissionsInfo';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Абитуриенту
          </h1>
          <p className="text-xl text-gray-600">
            Вся информация о поступлении на экономический факультет
          </p>
        </div>

        {/* Сроки приема - карточки */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📅 Сроки приема</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-hover bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Прием документов</h3>
              <p className="text-gray-600 mb-2">{admissionsTimeline.documentSubmission.start}</p>
              <p className="text-gray-600 font-semibold">↓</p>
              <p className="text-gray-600">{admissionsTimeline.documentSubmission.end}</p>
            </div>

            <div className="card-hover bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Вступительные испытания</h3>
              <p className="text-gray-600">{admissionsTimeline.entranceExams.period}</p>
            </div>

            <div className="card-hover bg-white rounded-2xl p-6 shadow-lg border-l-4 border-pink-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Завершение конкурса</h3>
              <p className="text-gray-600">{admissionsTimeline.competitionEnd}</p>
            </div>
          </div>
        </section>

        {/* Документы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📄 Необходимые документы</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-lg">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Льготы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">🏆 Льготы и преимущества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">🎓 Без вступительных испытаний</h3>
              <ul className="space-y-2">
                {benefits.withoutExams.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">⭐ Вне конкурса</h3>
              <ul className="space-y-2">
                {benefits.withoutCompetition.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Дополнительные баллы */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">➕ Дополнительные баллы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.additionalPoints.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                  <p className="text-gray-700 font-semibold mb-2">{item.achievement}</p>
                  <p className="text-3xl font-bold text-purple-600">+{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Готовы подать документы?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/programs" 
              className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl"
            >
              Выбрать направление 🎯
            </Link>
            <Link 
              href="/contacts" 
              className="px-8 py-4 rounded-full text-lg font-semibold bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all"
            >
              Задать вопрос приемной комиссии 💬
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}