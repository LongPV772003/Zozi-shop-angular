import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterModule, MatToolbarModule, MatButtonModule, MatIconModule,CartComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public cartService: CartService) {}
    toggleCart() {
    this.cartService.toggleCart();
  }
}

