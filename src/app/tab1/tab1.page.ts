
import { GuardsCheckStart, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetListadoService } from 'src/app/services/get-listado.service';
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { GetVentasService } from 'src/app/services/get-ventas.service';
import { GetSearchPvService } from '../services/get-search-pv.service';
import { GetSearchContadorProveedorService } from '../services/get-search-contador-proveedor.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertCtrl: AlertController,private router: Router,private getcontadorproveedor: GetSearchContadorProveedorService,
    private getlistados: GetListadoService, private alertController: AlertController, private getvendidos: GetVentasService,private getPV: GetSearchPvService,) { }
  nombre_global: any;
  idvendedor_global: any;
  data: any;
  on:any;

  pv:any;

  
  pvForm = new FormGroup({
    pv: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  async ngOnInit() {
    this.idvendedor_global = await localStorage.getItem("idvendedor_global")
    this.nombre_global = await localStorage.getItem("nombre_global")


    // console.log("idvendedor", this.idvendedor_global)
    // console.log("nomb vendedor", this.nombre_global)


    // await this.getlistado();


  }



  salir() {

    localStorage.setItem("idvendedor_global", "")
    /*global*/
    localStorage.setItem("nombre_global", "")
    


    this.router.navigate(['/login'])
  }




  // editar(sim:any){
  //   console.log("Aqui",sim)


  // }

  eliminar() {
    console.log("el")




  }




  // async getlistado() {

  //   console.log("entro a listado")

  //   // this.idclientes_global = await localStorage.getItem("idclientes_global")
  //   this.nombre_global = await localStorage.getItem("nombre_global")

  //   console.log("name es", this.nombre_global)
  //   // console.log("proyecto es", this.idclientes_global)



  //   /*llegue*/
  //   const params = { VENDEDOR: this.nombre_global }

  //   await this.getlistados.Listado(params).then(resp => {

  //     console.log("la resp del servicio es:", resp)
  //     this.data = resp.data;


  //   });


  // }




  // async editar(sim: any) {

  //   console.log("Aqui", sim)

  //   const alert = await this.alertController.create({
  //     header: 'Caratula de venta',
  //     // buttons: ['Guardar','Cancelar'],
  //     buttons: [
  //       {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           cssClass: 'secondary',
  //           handler: () => {
  //               console.log('Confirm Cancel');
  //           }
  //       }, 
  //       {
  //           text: 'Ok',
  //           handler: (alertData) => { //takes the data 
  //             console.log("SIM vendida",sim);
  //               console.log("El valor de venta enviado sera",alertData.name1);
  //           }
  //       }
  //   ],
  //     inputs: [
  //       {
  //         placeholder: 'SIM',
  //         value: sim
  //       },
  //       {
  //         type: 'text',
  //         name: 'name1',
  //         placeholder: 'VENTA',
  //       },
  //     ],
  //   });




  //   await alert.present();
  // }




async ionViewWillEnter(){

// this.on= true;

//   this.nombre_global = await localStorage.getItem("nombre_global")

//   const params = {
//     VENDEDOR: this.nombre_global
//   }

//   /*obteniendo clientes*/
//   await this.getvendidos.GetSimsVendidas(params).then(async resp => {

//     // console.log("la resp del servicio direccione es:", resp)
//     this.data = resp.data;

//     this.on= false;
//     // console.log(this.data)
//     // let userList2 = this.data;
//     // console.log("ul2", userList2)
//     // localStorage.setItem("lista", userList2)


//     // if (this.data == false) {
//     //   this.data = null;
//     //   // alert("Cliente no validado, favor de revisar de nuevo.")

//     //   const alert = await this.alertCtrl.create({  
//     //     header: 'Punto de venta no registrado.',  
//     //     // subHeader: 'SubTitle',  
//     //     // message: 'This is an alert message',  
//     //     buttons: ['OK']  
//     //   });  
//     //   await alert.present();  



//     // }
//   });


}



async buscar() {

  this.on= true;

  // console.log("val:", this.pv+'%')
  this.nombre_global = await localStorage.getItem("nombre_global")
  // console.log("nomb g:", this.nombre_global)

  const params = {
    pv: this.pv+'%',
    vendedor: this.nombre_global
  }

  /*obteniendo clientes*/
  await this.getcontadorproveedor.GetSearchContadorProveedor(params).then(async resp => {

    // console.log("la resp del servicio direccione es:", resp)
    this.data = resp.data;

    // console.log(this.data)
    // let userList2 = this.data;
    // console.log("ul2", userList2)
    // localStorage.setItem("lista", userList2)


    this.on= false;

    if (this.data == false) {
      this.data = null;
      // alert("Cliente no validado, favor de revisar de nuevo.")

      const alert = await this.alertCtrl.create({  
        header: 'Punto de venta no encontrado.',  
        // subHeader: 'SubTitle',  
        // message: 'This is an alert message',  
        buttons: ['OK']  
      });  
      await alert.present();  



    }
  });
}






}
