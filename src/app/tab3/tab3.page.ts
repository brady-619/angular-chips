import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {GetPuntosDeVentaService } from '../services/get-puntos-de-venta.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router, private getPuntosDeVenta: GetPuntosDeVentaService) {}

  data:any;

  ngOnInit() {}

async ionViewWillEnter(){
 
this.obtener();
   
  
  }

  async obtener(){
    localStorage.getItem("nombre_global")

    const params ={vendedor: localStorage.getItem("nombre_global")};

    await this.getPuntosDeVenta.GetPuntosVenta(params).then(async resp =>  {
      
      console.log("resp",resp)

      this.data = resp.data;

      }).catch(error=> {
        /* Código a realizar cuando se rechaza la promesa */
        console.log("NO paso chido",error)
      });
  }




  salir() {

    localStorage.setItem("nombre_global", "")
    /*global*/
    localStorage.setItem("idclientes_global", "")


    this.router.navigate(['/login'])
  }


editar(){
  console.log("Editar")
}

}
