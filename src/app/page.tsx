import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Интерьер Решения
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Ваш надежный партнер в создании неповторимого ландшафта
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши продукты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-gray-600">Производство по европейским стандартам</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">Быстрая доставка по всей России</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">Гарантия качества на всю продукцию</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
