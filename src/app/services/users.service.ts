import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        return {
          ...response,
          data: response.data.map((user: any) => ({
            ...user,
            first_name: user.first_name.toUpperCase(),
            last_name: user.last_name.toUpperCase()
          }))
        };
      })
    );
  }
}