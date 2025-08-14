import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Классическая брусчатка',
    description: 'Традиционная брусчатка для создания прочного и эстетичного покрытия. Идеально подходит для садовых дорожек и парковочных мест.',
    price: 850,
    dimensions: '20x10x6 см',
    color: 'Серый',
    material: 'Бетон',
    imageUrl: '/images/brick-1.jpg',
    category: 'Брусчатка',
    inStock: true,
    specifications: {
      thickness: '6 см',
      weight: '2.5 кг',
      frostResistance: 'F200',
      strength: 'M300'
    }
  },
  {
    id: '2',
    name: 'Плитка "Волна"',
    description: 'Декоративная плитка с волнистым рисунком. Создает интересный визуальный эффект и хорошо сочетается с различными стилями ландшафтного дизайна.',
    price: 920,
    dimensions: '30x30x4 см',
    color: 'Красный',
    material: 'Бетон',
    imageUrl: '/images/wave-1.jpg',
    category: 'Декоративная',
    inStock: true,
    specifications: {
      thickness: '4 см',
      weight: '3.2 кг',
      frostResistance: 'F150',
      strength: 'M250'
    }
  },
  {
    id: '3',
    name: 'Плитка "Квадрат"',
    description: 'Современная квадратная плитка с минималистичным дизайном. Отлично подходит для создания геометрических узоров и современных ландшафтных решений.',
    price: 780,
    dimensions: '40x40x5 см',
    color: 'Черный',
    material: 'Бетон',
    imageUrl: '/images/square-1.jpg',
    category: 'Современная',
    inStock: true,
    specifications: {
      thickness: '5 см',
      weight: '4.0 кг',
      frostResistance: 'F200',
      strength: 'M300'
    }
  }
]; 