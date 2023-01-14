import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetSearchPvService } from '../services/get-search-pv.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private getPV: GetSearchPvService,public alertCtrl: AlertController) {}

  pv:any;
  nombre_global: any;
  data:any;


  pvForm = new FormGroup({
    pv: new FormControl('', [Validators.required, Validators.minLength(1)])
  });



  salir() {

    localStorage.setItem("nombre_global", "")
    /*global*/
    localStorage.setItem("idclientes_global", "")


    this.router.navigate(['/login'])
  }


  async buscar() {

    // console.log("val:", this.pv+'%')
    this.nombre_global = await localStorage.getItem("nombre_global")
    // console.log("nomb g:", this.nombre_global)

    const params = {
      nombre: this.pv+'%',
      vendedor: this.nombre_global
    }

    /*obteniendo clientes*/
    await this.getPV.GetSearchPV(params).then(async resp => {

      // console.log("la resp del servicio direccione es:", resp)
      this.data = resp.data;

      // console.log(this.data)
      // let userList2 = this.data;
      // console.log("ul2", userList2)
      // localStorage.setItem("lista", userList2)


      if (this.data == false) {
        this.data = null;
        // alert("Cliente no validado, favor de revisar de nuevo.")

        const alert = await this.alertCtrl.create({  
          header: 'Punto de venta no registrado.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  



      }
    });
  }




  async vender(pv:any){
    // console.log("El pv a vender es", pv)

    localStorage.setItem("pv_a_vender",pv)


    this.router.navigate(['/ventas-sims'])

  }






}
