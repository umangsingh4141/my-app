import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempelate-based',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tempelate-based.component.html',
  styleUrl: './tempelate-based.component.scss'
})
export class TempelateBasedComponent {
  user = {
    name: '',
    email: '',
    phone: ''
  };
  
  submitted = false;
  showValidation = false;

  onSubmit() {
    this.showValidation = true;
    if (this.user.name && this.user.email && this.user.phone) {
      console.log('Form submitted', this.user);
      this.submitted = true;
      setTimeout(() => this.submitted = false, 3000);
    }
  }
}
