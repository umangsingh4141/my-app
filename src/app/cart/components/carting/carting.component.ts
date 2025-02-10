import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-carting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carting.component.html',
  styleUrl: './carting.component.scss'
})
export class CartingComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cartItems: Product[] = [];
  searchText: string = '';
  selectedColor: string = '';
  selectedCategory: string = '';

  colors: string[] = ['red', 'black', 'blue', 'white', 'green'];
  categories: string[] = ['shoes', 'clothing', 'accessories'];

  constructor(private cartService: CartService) {
    this.products = this.cartService.getProducts();
    this.filteredProducts = [...this.products];
    
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                          product.description.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesColor = !this.selectedColor || product.color === this.selectedColor;
      const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
      
      return matchesSearch && matchesColor && matchesCategory;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  isInCart(productId: number): boolean {
    return this.cartItems.some(item => item.id === productId);
  }
}
