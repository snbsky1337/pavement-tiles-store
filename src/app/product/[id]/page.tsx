import Image from 'next/image';
import { products } from '../../../data/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Характеристики</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Размеры:</p>
                    <p className="font-medium">{product.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Цвет:</p>
                    <p className="font-medium">{product.color}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Материал:</p>
                    <p className="font-medium">{product.material}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Категория:</p>
                    <p className="font-medium">{product.category}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Технические характеристики</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Толщина:</p>
                    <p className="font-medium">{product.specifications.thickness}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Вес:</p>
                    <p className="font-medium">{product.specifications.weight}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Морозостойкость:</p>
                    <p className="font-medium">{product.specifications.frostResistance}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Прочность:</p>
                    <p className="font-medium">{product.specifications.strength}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gray-900">{product.price} ₽/м²</span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'В наличии' : 'Нет в наличии'}
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 