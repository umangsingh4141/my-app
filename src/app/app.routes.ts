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

const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (!authService.getAuthStatus()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

export const routes: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: MainComponent,
        canActivate: [authGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'data-binding', component: DataBindingComponent },
            { path: 'directive', component: DirectivesComponent },
            { path: 'users', component: UsersComponent },
            { path: 'users/:id', component: UsersDetailsComponent },
            { 
                path: 'address', 
                component: AddressComponent,
                children: [
                    { path: 'primary', component: PrimaryAddressComponent },
                    { path: 'secondary', component: SecondaryAddressComponent },
                    { path: '', redirectTo: 'primary', pathMatch: 'full' }
                ] 
            }
        ]
    },
    // Catch all route - redirect to login
    { path: '**', redirectTo: '/login' }
];
