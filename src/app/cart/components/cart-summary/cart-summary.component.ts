import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  cartTotal: number = 0;
  cartItems$!: Observable<Product[]>;
  cartVisible$!: Observable<boolean>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.getCartItems();
    this.cartVisible$ = this.cartService.getCartVisibility();
    
    this.cartItems$.subscribe(() => {
      this.cartTotal = this.cartService.getCartTotal();
    });
  }

  closeCart() {
    this.cartService.toggleCart();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }
}