import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() age!: number;
  @Input() counter: number = 1;
  @Output() counterval = new EventEmitter<number>();

  changeCounter(currentval: number) {
    this.counter = currentval;
    this.counterval.emit(this.counter);
  }
}
