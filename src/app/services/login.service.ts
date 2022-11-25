import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }




  Login(params:any):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post('https://6yficn23bg.execute-api.us-east-1.amazonaws.com/dev/sims_login',params).subscribe(resp => {
        resolve(resp);
      },err=>{
        reject(err)
      })            
    })
  }
}
