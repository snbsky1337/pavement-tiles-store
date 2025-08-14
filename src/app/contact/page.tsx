export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Адрес</h3>
                <p className="text-gray-600">г. Екатерибург, Студенческая 49</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Телефон</h3>
                <p className="text-gray-600">+7 (993) 523-06-96</p>
                <p className="text-gray-600">+7 (993) 505-27-47</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">info@interior-solutions.ru</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Режим работы</h3>
                <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-600">Сб: 10:00 - 16:00</p>
                <p className="text-gray-600">Вс: Выходной</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Отправить сообщение</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Как нас найти</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.753833333333!2d60.583333333333336!3d56.833333333333336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e8b0c2b0c0d%3A0x5f0d5a5c0f0d5a5c!2z0JXQstGA0LXQvNC10YbRgtC60LDRjywg0KLQstC10YDRgdC60LDRjyDRg9C7Liwg0KXQsNC70YzQstC40YfQtdGB0LrQsNGPINC-0LHQuy4sIDQ5!5e0!3m2!1sru!2sru!4v1620000000000!5m2!1sru!2sru"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
} 