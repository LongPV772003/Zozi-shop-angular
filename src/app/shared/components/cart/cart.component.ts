import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CartService } from "../../../services/cart.service";
import { Component } from "@angular/core";
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get total() {
    return this.cartService.getTotal();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
}
