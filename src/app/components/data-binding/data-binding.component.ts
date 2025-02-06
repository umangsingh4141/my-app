import { CommonModule } from '@angular/common';
import { Component , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DataBindingComponent {

}
