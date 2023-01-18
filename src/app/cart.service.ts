import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.products.push(product);
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  getItems() {
    return this.products;
  }

  getShippingPrices() {
    // get shipping data from 'shippin.json';
    // format => type & price

    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
