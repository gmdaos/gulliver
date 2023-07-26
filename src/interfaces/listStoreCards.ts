export interface ListProductsLiquidation {
  cards: ProductsLiquidation[];
}

export interface ProductsLiquidation {
  id: string;
  title: string;
  description: string;
  src: Photos;
  price: number;
  liquidation: number;
}

export interface Photos {
  images: Array<string>;
}
