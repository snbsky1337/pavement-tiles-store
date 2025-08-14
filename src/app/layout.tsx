import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Интерьер Решения - Тротуарная плитка премиум качества",
  description: "Магазин тротуарной плитки премиум качества от компании Интерьер Решения. Широкий выбор моделей, доставка по всей России.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <nav className="bg-white shadow-md fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.png"
                    alt="Интерьер Решения логотип"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <a href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                  Интерьер Решения
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Главная
                </a>
                <a href="/products" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Продукты
                </a>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  О нас
                </a>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Контакты
                </a>
              </div>
              <div className="flex items-center">
                <a href="/cart" className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="h-20"></div>
        {children}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Контакты</h3>
                <p>Телефон: +7 (993) 523-06-96</p>
                <p>+7 (993) 505-27-47</p>
                <p>Email: info@interior-solutions.ru</p>
                <p>Адрес: г. Екатерибург, Студенческая 49</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: Выходной</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300">
                    VK
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    Telegram
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; 2024 Интерьер Решения. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
