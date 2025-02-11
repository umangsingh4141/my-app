import {
  HttpResponse
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpInterceptorFn } from '@angular/common/http';
export const userResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        return event.clone({
          body: {
            ...(typeof event.body === 'object' && event.body !== null ? event.body : {}),
            place: 'london'
          }
        });
      }
      return event;
    })
  );
};