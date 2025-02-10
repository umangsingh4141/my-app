import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  category: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 4999,
      color: "black",
      category: "shoes",
      image: "assets/nike-air.jpg",
      description: "Premium comfort running shoes"
    },
    {
      id: 2,
      name: "Adidas Sport T-Shirt",
      price: 1299,
      color: "red",
      category: "clothing",
      image: "assets/adidas-tshirt.jpg",
      description: "Breathable sports t-shirt"
    },
    {
      id: 3,
      name: "Puma Backpack",
      price: 1499,
      color: "blue",
      category: "accessories",
      image: "assets/puma-bag.jpg",
      description: "Spacious sports backpack"
    },
    {
      id: 4,
      name: "Under Armour Shorts",
      price: 899,
      color: "black",
      category: "clothing",
      image: "assets/ua-shorts.jpg",
      description: "Athletic performance shorts"
    },
    {
      id: 5,
      name: "Nike Sports Watch",
      price: 2999,
      color: "white",
      category: "accessories",
      image: "assets/nike-watch.jpg",
      description: "Digital sports watch"
    },
    {
      id: 6,
      name: "Adidas Running Shoes",
      price: 3999,
      color: "green",
      category: "shoes",
      image: "assets/adidas-running.jpg",
      description: "Professional running shoes"
    },
    {
      id: 7,
      name: "Puma Track Pants",
      price: 1799,
      color: "black",
      category: "clothing",
      image: "assets/puma-pants.jpg",
      description: "Comfortable track pants"
    },
    {
      id: 8,
      name: "Sports Water Bottle",
      price: 499,
      color: "blue",
      category: "accessories",
      image: "assets/water-bottle.jpg",
      description: "1L sports water bottle"
    },
    {
      id: 9,
      name: "Training Gloves",
      price: 699,
      color: "red",
      category: "accessories",
      image: "assets/gloves.jpg",
      description: "Gym training gloves"
    },
    {
      id: 10,
      name: "Running Cap",
      price: 399,
      color: "white",
      category: "accessories",
      image: "assets/cap.jpg",
      description: "Lightweight running cap"
    }
  ];

  private cartItems = new BehaviorSubject<Product[]>([]);
  private cartVisible = new BehaviorSubject<boolean>(false);

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getCartItems(): Observable<Product[]> {
    return this.cartItems.asObservable();
  }

  getCartVisibility(): Observable<boolean> {
    return this.cartVisible.asObservable();
  }

  toggleCart() {
    this.cartVisible.next(!this.cartVisible.value);
  }

  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, product]);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.value;
    this.cartItems.next(currentItems.filter(item => item.id !== productId));
  }

  getCartTotal(): number {
    return this.cartItems.value.reduce((total, item) => total + item.price, 0);
  }
}