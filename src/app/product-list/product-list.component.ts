import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  routeParam: string = '';
  products: any[] = [];

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.routeParam = this.route.url;
    this.setProducts();
  }

  setProducts() {
    if (this.routeParam === '/amigurumis') this.products = ['1', '2', '3'];
    if (this.routeParam === '/pirograbados') this.products = ['4', '5', '6'];
    if (this.routeParam === '/macrame') this.products = ['7', '8', '9'];
    console.log(this.products);
  }
}
