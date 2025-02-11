import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  // const obj = signal
  age: number = 25;
  counterFromChild: number = 1;

  accesCounter(val: number) {
    this.counterFromChild = val;
    console.log('Counter updated:', val);
  }
  ngOnInit() {
   const x = signal(5);
   const y = signal(10);
   const Z = computed(() => x() + y());
   x.set(10);
   console.log(Z());  
  }
}