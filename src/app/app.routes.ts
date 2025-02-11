import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { AddressComponent } from './components/nestedRouting/address/address.component';
import { HomeComponent } from './components/home/home.component';
import { PrimaryAddressComponent } from './components/nestedRouting/primary-address/primary-address.component';
import { SecondaryAddressComponent } from './components/nestedRouting/secondary-address/secondary-address.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { LazyComponent } from './components/lazy/lazy.component';
import { adminAuthGuard, AdminChildAuthGuard } from './guards/admin-auth.guard';
import { FormsComponent } from './components/forms/forms.component';
import { TempelateBasedComponent } from './components/forms/tempelate-based/tempelate-based.component';
import { ReactiveBasedComponent } from './components/forms/reactive-based/reactive-based.component';
import { roleGuard } from './guards/role.guard';
import { CartingComponent } from './cart/components/carting/carting.component';
import { authGuard } from './guards/auth.guard';
import { CrudTableComponent } from './components/crud-table/crud-table.component';
import { HomeComponent as LifecycleHomeComponent } from './lifecycle/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: 'lifecycle', 
        component: LifecycleHomeComponent,
        canActivate: [authGuard, roleGuard(['admin', 'user'])]
      },
      { path: 'home', component: HomeComponent },
      { 
        path: 'cart', 
        component: CartingComponent,
        canActivate: [authGuard, roleGuard(['admin', 'user'])]
      },
      { 
        path: 'users', 
        component: UsersComponent,
        canActivate: [authGuard, roleGuard(['admin', 'user'])],
        children: [
          { path: ':id', component: UsersDetailsComponent }
        ]
      },
      { 
        path: 'crud', 
        component: CrudTableComponent,
        canActivate: [authGuard, roleGuard(['admin'])]
      },
      
      // Admin Routes
      {
        path: 'admin',
        canActivate: [authGuard, roleGuard(['admin'])],
        children: [
          {
            path: 'forms',
            component: FormsComponent,
            children: [
              { path: 'template', component: TempelateBasedComponent },
              { path: 'reactive', component: ReactiveBasedComponent }
            ]
          },
          {
            path: 'address',
            component: AddressComponent,
            children: [
              { path: 'primary', component: PrimaryAddressComponent },
              { path: 'secondary', component: SecondaryAddressComponent }
            ]
          },
          { path: 'directives', component: DirectivesComponent },
          { path: 'data-binding', component: DataBindingComponent }
        ]
      }
    ]
  }
];
