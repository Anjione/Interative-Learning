import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private CREATE_USER = environment.urlAPI + 'user/create';

  constructor(private http: HttpClient) {

   }

  // addUser
  public addUser(user: any){
    return this.http.post(this.CREATE_USER, user)
  }
}
