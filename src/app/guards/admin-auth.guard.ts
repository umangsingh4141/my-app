import { CanActivateFn, CanActivateChildFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  return true;
};

export const AdminChildAuthGuard: CanActivateChildFn = (route, state) => {
  // Restrict access to child routes (primary/secondary)
  return false;
};