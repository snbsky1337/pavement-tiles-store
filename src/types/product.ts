export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  dimensions: string;
  color: string;
  material: string;
  imageUrl: string;
  category: string;
  inStock: boolean;
  specifications: {
    thickness: string;
    weight: string;
    frostResistance: string;
    strength: string;
  };
} 