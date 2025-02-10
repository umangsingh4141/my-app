import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  age: number = 25;
  counterFromChild: number = 1;

  accesCounter(val: number) {
    this.counterFromChild = val;
    console.log('Counter updated:', val);
  }
}