export type VehicleStat = {
  title: string;
  value: string;
  percentage: number;
};

export type Vehicle = {
  id: string;
  type: string;
  name: string;
  title: string;
  category: string;
  diamondPrice: string;
  cardPrice: string;
  image: string;
  exclusive: boolean;
  stats: VehicleStat[];
};
