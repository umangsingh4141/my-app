import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges {
  @Input() title: string = '';
  @Input() user: User = { name: '', email: '' };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      console.log('Title changed:');
      console.log('Previous value:', changes['title'].previousValue);
      console.log('Current value:', changes['title'].currentValue);
    }

    if (changes['user']) {
      console.log('User changed:');
      console.log('Previous value:', changes['user'].previousValue);
      console.log('Current value:', changes['user'].currentValue);
    }
  }
}
