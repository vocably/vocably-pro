export interface Card {
  language?: string;
  sideA: string;
  sideB: string;
}

export interface CardItem {
  id: string;
  created: number;
  updated?: number;
  data: Card;
}
