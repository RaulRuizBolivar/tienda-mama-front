import { product_ } from '../interfaces/product.interface';

export class Product {
  createdAt: Date;
  name: string;
  stock: number;
  description: string;
  price: number;
  campaignId: number;

  constructor(product: product_) {
    this.createdAt = product.createdAt;
    this.name = product.name;
    this.stock = product.stock;
    this.description = product.description;
    this.price = product.price;
    this.campaignId = product.campaignId;
  }
}
