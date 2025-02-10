import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-based',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-based.component.html',
  styleUrl: './reactive-based.component.scss'
})
export class ReactiveBasedComponent {
  userForm: FormGroup;
  submitted = false;
  showValidation = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.showValidation = true;
    if (this.userForm.valid) {
      console.log('Form submitted', this.userForm.value);
      this.submitted = true;
      setTimeout(() => this.submitted = false, 3000);
    }
  }
}