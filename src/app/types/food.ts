export type FoodItem = {
  name: string;
  image: string;
  alt?: string;
  price: number | null;
  variations?: { name: string; price: number }[];
  featured?: boolean;
};


