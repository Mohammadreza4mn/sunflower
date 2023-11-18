interface IInitialState {
  list: IProduct[];
  totalRowCount: number;
}

interface IProduct {
  description: string;
  imageUrl: string;
  title: string;
}

export type { IInitialState, IProduct };
