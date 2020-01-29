export interface Hawk {
  id: number;
  name: string;
  gender: string;
  size: string;
  wingspanBegin?: number;
  wingspanEnd?: number;
  weightBegin?: number;
  weightEnd?: number;
  lengthBegin?: number;
  lengthEnd?: number;
  colorDescription?: string;
  behaviorDescription?: string;
  habitatDescription?: string;
  pictureUrl?: string;
}

export interface StoreState {
  hawks: Hawk[];
}
