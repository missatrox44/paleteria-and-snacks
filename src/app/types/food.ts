// export type FoodItem = {
//   name: string;
//   image: string;
//   alt?: string;
//   price: number | null;
//   variations?: { name: string; price: number }[];
//   featured?: boolean;
// };


export interface FoodItem {
  name: {
    en: string;
    es: string;
  };
  image: string;
  alt: {
    en: string;
    es: string;
  };
  price: number | null;
  variations?: {
    name: {
      en: string;
      es: string;
    };
    price: number;
  }[];
  featured: boolean;
}
