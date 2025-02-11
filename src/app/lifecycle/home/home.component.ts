import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent, User } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pageTitle: string = 'Initial Title';
  currentUser: User = {
    name: 'Sanyam',
    email: 'sanyam@gmail.com'
  };

  updateTitle() {
    this.pageTitle = 'Updated Title - ' + new Date().toLocaleTimeString();
  }

  updateUser() {
    this.currentUser = {
      name: 'Sanyam',
      email: 'sanyam@gmail.com'
    };
  }
}
