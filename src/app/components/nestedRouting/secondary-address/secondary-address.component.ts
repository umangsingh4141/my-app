import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-address',
  imports: [CommonModule],
  templateUrl: './secondary-address.component.html',
  styleUrl: './secondary-address.component.scss'
})
export class SecondaryAddressComponent {
  constructor(private router: Router) {}

  navigateToPrimary() {
    this.router.navigate(['/address/primary']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
