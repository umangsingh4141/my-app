import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmulatedComponent } from './components/encapsulation/emulated/emulated.component';
import { ShadowComponent } from './components/encapsulation/shadow/shadow.component';
import { NoneComponent } from './components/encapsulation/none/none.component';
import { AddressComponent } from './components/nestedRouting/address/address.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    FormsModule, 
    RouterOutlet,  
    EmulatedComponent,
    ShadowComponent,
    NoneComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  empname = "Ritik";
  age  = 100;
  show(value: string) {
    console.log(value);
  }
}
