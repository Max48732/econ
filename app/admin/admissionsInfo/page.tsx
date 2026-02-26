export default function AdmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Абитуриенту</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📅 Сроки приема</h2>
        {/* Информация о сроках */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">📄 Необходимые документы</h2>
        {/* Список документов */}
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">🏆 Льготы и преимущества</h2>
        {/* Информация о льготах */}
      </section>
    </div>
  );
}