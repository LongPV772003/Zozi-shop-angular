import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import { BannerComponent } from "../../shared/components/banner/banner.component";
import { products } from "../../data/product.data";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatIconModule,ProductCardComponent,BannerComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showAll = false;
  products = products;
  get displayedProducts(){
    return this.showAll ? this.products : this.products.slice(0, 8)
  }
  toggleShow(){
    this.showAll = !this.showAll
  }
    currentIndex = 0;

  slides = [
    { image: 'assets/handmade1.jpg', title: 'Handmade Jewelry' },
    { image: 'assets/handmade2.jpg', title: 'Creative Sketching' },
    { image: 'assets/handmade3.jpg', title: 'Unique Wooden Craft' },
  ];

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  get nextSlide() {
    return this.slides[(this.currentIndex + 1) % this.slides.length];
  }
  get threeSlide() {
    return this.slides[(this.currentIndex + 2) % this.slides.length];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
