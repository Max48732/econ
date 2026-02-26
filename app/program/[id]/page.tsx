'use client';
import { programs } from '@/data/admissionsInfo';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Направления подготовки
          </h1>
          <p className="text-xl text-gray-600">
            Выберите свою будущую профессию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className={`h-32 bg-gradient-to-br ${
                index % 3 === 0 ? 'from-blue-500 to-cyan-500' :
                index % 3 === 1 ? 'from-purple-500 to-pink-500' :
                'from-orange-500 to-red-500'
              } flex items-center justify-center`}>
                <span className="text-6xl">
                  {index % 3 === 0 ? '💼' : index % 3 === 1 ? '📊' : '🏛️'}
                </span>
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  {program.code}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-semibold mb-2">Вступительные испытания:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/programs/${program.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors"
                >
                  Подробнее 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}