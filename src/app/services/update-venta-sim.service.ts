import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateVentaSimService {

  constructor(private http:HttpClient) { }




  UpdateVentaSim(params:any):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/update_venta_sim_apk',params).subscribe(resp => {
        resolve(resp);
      },err=>{
        reject(err)
      })            
    })
  }
}




