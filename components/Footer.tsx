export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* О факультете */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Экономический факультет ПГУ
            </h3>
            <p className="text-gray-300 mb-4">
              Качественное образование, современные программы, яркие перспективы для будущих экономистов и управленцев.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors">
                VK
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-colors">
                TG
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 г. Тирасполь, ул. 25 Октября, 128</li>
              <li>📞 +373 (772) XX-XX-XX</li>
              <li>✉️ econom@pgu.ru</li>
              <li>🕐 Пн-Пт: 9:00 - 17:00</li>
            </ul>
          </div>

          {/* Разделы */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Разделы</h3>
            <ul className="space-y-2">
              {['Новости', 'Программы', 'Абитуриенту', 'Студентам'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Экономический факультет ПГУ им. Т.Г. Шевченко</p>
          <p className="text-sm mt-2">Учебный проект</p>
        </div>
      </div>
    </footer>
  );
}