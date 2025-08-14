export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">О нас</h1>
        
        {/* Company Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Компания Интерьер Решения</h2>
          <p className="text-gray-600 mb-4">
            Мы являемся ведущим производителем и поставщиком тротуарной плитки в России. 
            Компания Интерьер Решения была основана в 2010 году и с тех пор успешно развивается, 
            предлагая клиентам только качественную продукцию.
          </p>
          <p className="text-gray-600">
            Наш производственный комплекс оснащен современным оборудованием, 
            что позволяет нам выпускать продукцию высочайшего качества, 
            соответствующую всем международным стандартам.
          </p>
        </div>
        
        {/* Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Качество</h3>
            <p className="text-gray-600">
              Мы используем только высококачественные материалы и современные 
              технологии производства для создания долговечной продукции.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Надежность</h3>
            <p className="text-gray-600">
              Наша продукция проходит строгий контроль качества на каждом 
              этапе производства, что гарантирует ее надежность и долговечность.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Инновации</h3>
            <p className="text-gray-600">
              Мы постоянно совершенствуем наши технологии и разрабатываем 
              новые решения для удовлетворения потребностей наших клиентов.
            </p>
          </div>
        </div>
        
        {/* Production Process */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6">Процесс производства</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Подбор материалов</h3>
              <p className="text-gray-600 text-sm">
                Тщательный выбор высококачественных компонентов
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Производство</h3>
              <p className="text-gray-600 text-sm">
                Современное оборудование и технологии
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Контроль качества</h3>
              <p className="text-gray-600 text-sm">
                Строгий контроль на каждом этапе
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600 text-sm">
                Быстрая и надежная доставка
              </p>
            </div>
          </div>
        </div>
        
        {/* Certificates */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Наши сертификаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-600">ISO 9001:2015</p>
                <p className="text-sm text-gray-500">Система менеджмента качества</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-600">ISO 14001:2015</p>
                <p className="text-sm text-gray-500">Система экологического менеджмента</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-600">OHSAS 18001:2007</p>
                <p className="text-sm text-gray-500">Система управления охраной труда</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 