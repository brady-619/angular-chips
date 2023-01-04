import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }




  Login(params:any):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/login_apk',params).subscribe(respuesta => {
        resolve(respuesta);
      },err=>{
        reject(err)
      })            
    })
  }
}
