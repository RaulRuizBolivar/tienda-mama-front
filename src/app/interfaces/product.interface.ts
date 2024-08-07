import { Image } from './image.interface';

export interface Product {
  createdAt: Date;
  name: string;
  stock: number;
  description: string;
  price: number;
  campaignId: number;
  images: Image[];
  id: number;
}
