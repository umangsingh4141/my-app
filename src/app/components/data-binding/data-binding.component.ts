import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataBindingServiceService } from './data-binding-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent implements OnInit {
  originalNumbers: number[] = [];
  multipliedNumbers: number[] = [];

  constructor(private dataService: DataBindingServiceService) {}

  ngOnInit() {
    this.dataService.getNumbers().subscribe(
      numbers => this.originalNumbers = numbers
    );

    this.dataService.getNumbers().pipe(
      map(numbers => numbers.map(num => num * 10))
    ).subscribe(
      numbers => this.multipliedNumbers = numbers
    );
  }

  addNumber(num: number): void {
    this.originalNumbers.push(num);
    this.multipliedNumbers.push(num * 10);
  }

  removeNumber(index: number): void {
    this.originalNumbers.splice(index, 1);
    this.multipliedNumbers.splice(index, 1);
  }
}
