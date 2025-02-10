import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../cart/services/cart.service';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { CartSummaryComponent } from '../../cart/components/cart-summary/cart-summary.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterOutlet,
    CartSummaryComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  age: number = 25;
  counterFromChild: number = 0;
  userRole: string | null = null;
  cartItemCount: number = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  canAccess(roles: string[]): boolean {
    return this.userRole ? roles.includes(this.userRole) : false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  accesCounter(val: number) {
    this.counterFromChild = val;
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
