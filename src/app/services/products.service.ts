import { Injectable } from '@angular/core';
import { Product } from '../classes/Product.class';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { product_ } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = 'https://localhost:3000/api/v1'; // ! Esto tiene que venir de un archivo .env o algo del estilo

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    const url = this.baseUrl + '/products';
    console.log(url);
    const response = this.http.get<product_[]>(url);
    return response;
  }
}
