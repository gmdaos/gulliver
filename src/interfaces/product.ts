// Generated by https://quicktype.io

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  Electronics = 'Electronics',
  Jewelery = 'Jewelery',
  MenSClothing = ' MenSClothing',
  WomenSClothing = ' WomenSClothing',
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ListProducts {
  array: Product[];
}