import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../classes/Product.class';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  routeParam: string = '';
  products: Product[] = [];

  constructor(
    private route: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.routeParam = this.route.url;
    this.setProducts();
  }

  async setProducts() {
    this.productsService.getAll().subscribe((products: Product[]) => {
      console.log(products);
      if (!products) return;
      this.products = products;
    });
  }
}
