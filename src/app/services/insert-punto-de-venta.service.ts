import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertPuntoDeVentaService {

  constructor(private http:HttpClient) { }




  InsertPuntoVenta(params:any):Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/insert_punto_de_venta_apk',params).subscribe(resp => {
        resolve(resp);
      },err=>{
        reject(err)
      })            
    })
  }
}