export const admissionsTimeline = {
  documentSubmission: {
    start: 'Третий понедельник июня',
    end: 'Четвёртый понедельник июля',
    description: 'Прием документов на обучение',
  },
  entranceExams: {
    period: 'Две недели с четвёртого понедельника июля',
    description: 'Вступительные испытания',
  },
  competitionEnd: 'Не позднее 10 августа',
  enrollmentDeadline: '5 рабочих дней после объявления решения',
};

export const requiredDocuments = [
  'Документ об образовании (оригинал + копия)',
  'Свидетельство ЕГЭ (оригинал)',
  'Медицинская справка (форма 086-У)',
  '6 цветных фотографий 3×4 см',
  'Паспорт (оригинал + копия)',
  'Военный билет (для военнообязанных)',
];

export const benefits = {
  withoutCompetition: [
    'Дети-сироты и дети без попечения родителей',
    'Инвалиды I, II, III группы',
    'Участники боевых действий',
    'Ликвидаторы последствий аварии на ЧАЭС',
  ],
  withoutExams: [
    'Аттестат с отличием',
    'Призёры Республиканской олимпиады (профильный предмет)',
    'Победители Профориентационной олимпиады ПГУ',
  ],
  additionalPoints: [
    { achievement: 'Профориентационная олимпиада (I место)', points: 30 },
    { achievement: 'Профориентационная олимпиада (II место)', points: 20 },
    { achievement: 'Профориентационная олимпиада (III место)', points: 10 },
    { achievement: 'Республиканская конференция (I место)', points: 20 },
    { achievement: 'Обучение на «отлично» по доп. программе', points: 25 },
  ],
};

export const contactInfo = {
  address: 'г. Тирасполь, ул. 25 Октября, 128',
  phone: '+373 (533) XX-XX-XX',
  email: 'econom@pgu.ru',
  workingHours: 'Пн–Пт: 9:00–17:00',
  admissionsPhone: '+373 (533) XX-XX-XX',
  admissionsEmail: 'priem@pgu.ru',
};
