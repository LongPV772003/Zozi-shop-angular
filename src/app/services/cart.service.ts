import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  isOpen = false;

  toggleCart() {
    this.isOpen = !this.isOpen;
  }

  addToCart(product: any) {
    this.items.push(product);
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
