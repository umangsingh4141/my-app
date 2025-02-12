import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBindingServiceService {
  private numbers: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  getNumbers(): Observable<number[]> {
    return of(this.numbers);
  }
}
