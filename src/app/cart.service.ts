import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];

  constructor() {}

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
}
