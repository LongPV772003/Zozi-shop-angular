import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule  } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { NgFor } from '@angular/common';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { products } from '../../data/product.data';
@Component({
  selector: 'app-search',
  imports:[FormsModule,PaginationComponent,NgFor,ProductCardComponent,MatFormFieldModule,MatInputModule,MatSelectModule,MatOptionModule,MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
})
export class SearchComponent {
  searchQuery = '';
  selectedCategory = '';
  selectedSort = 'all';
  priceSort = '';

  categories = [
  'Handmade Crafts',
  'Home Decor',
  'Jewelry & Accessories',
  'Personalized Gifts',
  'Art & Paintings',
  'Cultural Souvenirs'
];

 products = products
  currentPage = 1
  get paginatedFilteredProducts() {
  let result = [...this.products];

  if (this.selectedCategory) {
    result = result.filter(p => p.category === this.selectedCategory);
  }

  if (this.searchQuery) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  if (this.selectedSort && this.selectedSort !== 'all') {
    result = result.filter(p => p.tag === this.selectedSort);
  }

  if (this.priceSort === 'asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (this.priceSort === 'desc') {
    result.sort((a, b) => b.price - a.price);
  }

  const start = (this.currentPage - 1) * 8;
  return result.slice(start, start + 8);
}

get totalFilteredProducts(): number {
  let result = [...this.products];

  if (this.selectedCategory) {
    result = result.filter(p => p.category === this.selectedCategory);
  }

  if (this.searchQuery) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  if (this.selectedSort && this.selectedSort !== 'all') {
    result = result.filter(p => p.tag === this.selectedSort);
  }

  return result.length;
}
  onSearch() {
    
  }

  selectSort(type: string) {
    this.selectedSort = type;
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * 16;
    return this.products.slice(start, start + 16);
  }

  handlePageChange(page: number) {
    this.currentPage = page;
  }
}
