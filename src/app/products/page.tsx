import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Все продукты</h1>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Категория
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Все категории</option>
                <option value="Брусчатка">Брусчатка</option>
                <option value="Декоративная">Декоративная</option>
                <option value="Современная">Современная</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Цвет
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Все цвета</option>
                <option value="Серый">Серый</option>
                <option value="Красный">Красный</option>
                <option value="Черный">Черный</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Цена
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm">
                <option value="">Любая цена</option>
                <option value="0-500">До 500 ₽/м²</option>
                <option value="500-1000">500 - 1000 ₽/м²</option>
                <option value="1000+">Более 1000 ₽/м²</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Сортировка
              </label>
              <select className="w-full border-gray-300 rounded-md shadow-sm">
                <option value="popular">По популярности</option>
                <option value="price-asc">По возрастанию цены</option>
                <option value="price-desc">По убыванию цены</option>
                <option value="new">Сначала новые</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
} 