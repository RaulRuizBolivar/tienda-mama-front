import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  @Input({ required: true }) product!: Product;
}
