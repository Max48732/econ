import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-[#c9a227] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          404
        </p>
        <h1 className="text-2xl font-bold text-[#0f1f3d] mb-3">Страница не найдена</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Возможно, страница была перемещена или адрес введён неверно.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/"         className="btn-primary">На главную</Link>
          <Link href="/programs" className="btn-outline" style={{ background: 'transparent', color: '#1e4db7', border: '2px solid #1e4db7' }}>
            Программы
          </Link>
        </div>
      </div>
    </div>
  );
}
