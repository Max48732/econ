import type { Metadata } from 'next';
import { contactInfo } from '@/data/admissionsInfo';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакты экономического факультета ПГУ им. Т.Г. Шевченко',
};

const departments = [
  {
    name: 'Деканат',
    icon: '🏛️',
    phone: '+373 (533) XX-XX-01',
    email: 'dekanat@econom.pgu.ru',
    room: 'Каб. 201',
    hours: 'Пн–Пт: 9:00–17:00',
  },
  {
    name: 'Приёмная комиссия',
    icon: '📋',
    phone: '+373 (533) XX-XX-02',
    email: 'priem@econom.pgu.ru',
    room: 'Каб. 105',
    hours: 'Пн–Сб: 9:00–18:00 (в период приёма)',
  },
  {
    name: 'Кафедра экономики',
    icon: '📊',
    phone: '+373 (533) XX-XX-03',
    email: 'kafedra@econom.pgu.ru',
    room: 'Каб. 310',
    hours: 'Пн–Пт: 10:00–16:00',
  },
  {
    name: 'Кафедра менеджмента',
    icon: '🏢',
    phone: '+373 (533) XX-XX-04',
    email: 'management@econom.pgu.ru',
    room: 'Каб. 315',
    hours: 'Пн–Пт: 10:00–16:00',
  },
];

export default function ContactsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f1f3d] hero-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-2">Свяжитесь с нами</p>
          <h1 className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Контакты
          </h1>
          <p className="text-blue-200 mt-3 max-w-xl">
            Мы готовы ответить на все ваши вопросы о поступлении и учёбе
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Основная инфо */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { icon: '📍', title: 'Адрес',       value: contactInfo.address,     link: null },
            { icon: '📞', title: 'Телефон',      value: contactInfo.phone,       link: `tel:${contactInfo.phone}` },
            { icon: '✉️', title: 'Email',        value: contactInfo.email,       link: `mailto:${contactInfo.email}` },
            { icon: '🕐', title: 'Режим работы', value: contactInfo.workingHours, link: null },
          ].map((item) => (
            <div key={item.title} className="card p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">{item.title}</p>
              {item.link ? (
                <a href={item.link} className="text-sm font-medium text-[#1e4db7] hover:underline">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-[#0f1f3d]">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Подразделения */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Подразделения
            </h2>
            <div className="section-divider mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {departments.map((dept) => (
              <div key={dept.name} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{dept.icon}</span>
                  <h3 className="font-bold text-[#0f1f3d] text-lg">{dept.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Кабинет</p>
                    <p className="font-medium text-gray-700">{dept.room}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Часы работы</p>
                    <p className="font-medium text-gray-700">{dept.hours}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Телефон</p>
                    <a href={`tel:${dept.phone}`} className="font-medium text-[#1e4db7] hover:underline text-sm">
                      {dept.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <a href={`mailto:${dept.email}`} className="font-medium text-[#1e4db7] hover:underline text-sm truncate block">
                      {dept.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Задать вопрос
            </h2>
            <div className="section-divider mt-3" />
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Имя *</label>
                  <input type="text" placeholder="Иван Иванов" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input type="email" placeholder="example@mail.ru" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Тема обращения</label>
                <select className="input-field">
                  <option>Вопрос о поступлении</option>
                  <option>Вопрос о программах обучения</option>
                  <option>Технический вопрос</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Сообщение *</label>
                <textarea
                  rows={5}
                  placeholder="Ваш вопрос..."
                  className="input-field resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 cursor-pointer" />
                <label htmlFor="consent" className="text-sm text-gray-500 cursor-pointer">
                  Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности
                </label>
              </div>
              <button className="btn-primary w-full text-center">
                Отправить сообщение ✉️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
