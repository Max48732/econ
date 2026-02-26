'use client';
import { useState } from 'react';
import Link from 'next/link';

type AuthMode = 'login' | 'register';

// Трекинг статусов
const applicationSteps = [
  { id: 1, label: 'Заявка создана',       icon: '📝', desc: 'Анкета заполнена и отправлена' },
  { id: 2, label: 'На проверке',          icon: '🔍', desc: 'Документы проверяются комиссией' },
  { id: 3, label: 'Одобрена',             icon: '✅', desc: 'Заявка принята к рассмотрению' },
  { id: 4, label: 'Приказ о зачислении',  icon: '🎓', desc: 'Вы зачислены! Поздравляем!' },
];

// Демо-состояние (в реальном проекте — из API)
const demoApplication = {
  program: 'Менеджмент',
  currentStep: 2,
  submittedAt: '20.02.2026',
};

function AuthForm() {
  const [mode, setMode]           = useState<AuthMode>('login');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [name, setName]           = useState('');
  const [error, setError]         = useState('');
  const [loading, setLoading]     = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Заполните все обязательные поля'); return; }
    if (mode === 'register' && !name) { setError('Введите ваше имя'); return; }

    setLoading(true);
    // Имитация запроса
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setError('Функция входа будет доступна после подключения к серверу.');
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">

        {/* Шапка */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0f1f3d] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
            🎓
          </div>
          <h1 className="text-2xl font-bold text-[#0f1f3d]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Личный кабинет
          </h1>
          <p className="text-gray-500 text-sm mt-1">абитуриента экономического факультета ПГУ</p>
        </div>

        {/* Табы */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'login' ? 'bg-white shadow text-[#0f1f3d]' : 'text-gray-500'
            }`}
          >
            Войти
          </button>
          <button
            onClick={() => setMode('register')}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'register' ? 'bg-white shadow text-[#0f1f3d]' : 'text-gray-500'
            }`}
          >
            Регистрация
          </button>
        </div>

        {/* Форма */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Полное имя *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иванов Иван Иванович"
                  className="input-field"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.ru"
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Пароль *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Минимум 8 символов"
                className="input-field"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Подождите...' : mode === 'login' ? 'Войти в кабинет' : 'Создать аккаунт'}
            </button>
          </form>

          {/* Соцсети */}
          <div className="mt-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative text-center text-xs text-gray-400 bg-white px-3 inline-block left-1/2 -translate-x-1/2">
                или войдите через
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'VK',       color: '#0077FF', icon: 'ВК' },
                { name: 'Telegram', color: '#229ED9', icon: 'TG' },
                { name: 'Яндекс',  color: '#FC3F1D', icon: 'Я'  },
              ].map((soc) => (
                <button
                  key={soc.name}
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 text-sm font-bold transition-colors hover:bg-gray-50"
                  style={{ color: soc.color }}
                >
                  {soc.icon}
                </button>
              ))}
            </div>
          </div>

          {mode === 'login' && (
            <p className="text-center text-xs text-gray-400 mt-4">
              Нет аккаунта?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-[#1e4db7] font-medium hover:underline"
              >
                Зарегистрируйтесь
              </button>
            </p>
          )}
        </div>

        {/* Трекинг — превью */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Превью личного кабинета</p>
          <h3 className="font-bold text-[#0f1f3d] mb-1 text-sm">Ваша заявка: {demoApplication.program}</h3>
          <p className="text-xs text-gray-400 mb-5">Подана {demoApplication.submittedAt}</p>
          <div className="space-y-3">
            {applicationSteps.map((step, i) => {
              const done   = i + 1 < demoApplication.currentStep;
              const active = i + 1 === demoApplication.currentStep;
              return (
                <div key={step.id} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all ${
                      done   ? 'bg-green-500 text-white' :
                      active ? 'bg-[#1e4db7] text-white shadow-md shadow-blue-200' :
                               'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {done ? '✓' : step.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${active ? 'text-[#1e4db7]' : done ? 'text-gray-700' : 'text-gray-400'}`}>
                      {step.label}
                    </p>
                    {active && <p className="text-xs text-gray-400">{step.desc}</p>}
                  </div>
                  {active && (
                    <span className="ml-auto text-xs bg-[#1e4db7] text-white px-2.5 py-0.5 rounded-full font-medium">
                      Текущий
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Согласие */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Регистрируясь, вы соглашаетесь с{' '}
          <Link href="#" className="text-[#1e4db7] hover:underline">
            политикой обработки персональных данных
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
