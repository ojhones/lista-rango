export type FinishAt = {
  year?: number;
  month?: number;
  day?: number;
  time?: string;
  datetime?: string;
};

export type StartAt = {
  year?: number;
  month?: number;
  day?: number;
  time?: string;
  datetime?: string;
};

export type Promotion = {
  id?: string;
  description?: string;
  price?: number;
  startsAt?: StartAt;
  finishAt?: FinishAt;
};

export type Category = {
  id?: string;
  name?: string;
};

export interface Products {
  id?: string;
  name?: string;
  price?: number;
  image?: string | null;
  imageUrl?: string | null;
  category?: Category;
  promotion?: Promotion;
}
