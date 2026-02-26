// data/programs.ts

export interface Program {
  id: number;
  name: string;
  code: string;
  level: 'Бакалавриат' | 'Магистратура' | 'Специалитет';
  form: 'Очная' | 'Заочная';
  subjects: string[];
  passingScore: number;
  budgetPlaces: number;
  contractPrice?: string;
  description: string;
  lastUpdated: string; // ⚠️ Важно: дата обновления данных
}

export const programs: Program[] = [
  {
    id: 1,
    name: "Экономика",
    code: "38.03.01",
    level: "Бакалавриат",
    form: "Очная",
    subjects: ["Математика", "Обществознание", "Русский язык"],
    passingScore: 0, // ⚠️ ВПИШИ ОФИЦИАЛЬНЫЕ ДАННЫЕ
    budgetPlaces: 0, // ⚠️ ВПИШИ ОФИЦИАЛЬНЫЕ ДАННЫЕ
    contractPrice: "0", // ⚠️ ВПИШИ ОФИЦИАЛЬНЫЕ ДАННЫЕ
    description: "", // ⚠️ ВПИШИ ОФИЦИАЛЬНОЕ ОПИСАНИЕ
    lastUpdated: "25.02.2026"
  },
  // ... остальные специальности
];