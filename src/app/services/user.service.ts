import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogin = false;

  constructor(private http: HttpClient) { }

  public login(login: any): Observable<string>{
    return this.http.post<string>("http://localhost:3080/user/authenticate", login);
  }

  // isLogin(){
  //   if(this.token){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}
