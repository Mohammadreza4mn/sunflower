interface IAddProduct {
  title: string;
  price: string;
  description: string;
  file: string;
}

interface IProductList {
  count: number;
  skip: number;
}

export type { IAddProduct, IProductList };
