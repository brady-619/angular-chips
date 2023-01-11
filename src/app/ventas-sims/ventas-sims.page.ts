import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetSimsAVenderAttService } from '../services/get-sims-a-vender-att.service';

import { UpdateVentaSimService } from 'src/app/services/update-venta-sim.service';


@Component({
  selector: 'app-ventas-sims',
  templateUrl: './ventas-sims.page.html',
  styleUrls: ['./ventas-sims.page.scss'],
})
export class VentasSimsPage implements OnInit {

  constructor(private updateventasim: UpdateVentaSimService, private router: Router, private simsAtt: GetSimsAVenderAttService, public alertCtrl: AlertController) { }

  pv: any;
  data: any;
  vendedor: any;
  sims: any;

  ngOnInit() {
  }


  regresar() {




    this.router.navigate(['/tabs/tab2'])
  }


  async ionViewWillEnter() {
    this.pv = await localStorage.getItem("pv_a_vender")
    console.log("Pv a vender", this.pv)
  }




  async att() {
    console.log("Ingresaste a AT&T")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'AT&T'

    }

    console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });




  }

  async bait() {
    console.log("Ingresaste a BAIT")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'BAIT'

    }

    console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });

  }
  async movistar() {
    console.log("Ingresaste a MOVISTAR")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'MOVISTAR'

    }

    console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });

  }
  async unefon() {
    console.log("Ingresaste a UNEFON")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'UNEFON'

    }

    console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });

  }



  async vender(sims: any) {
    console.log("Sim:", sims);


    this.vendedor = await localStorage.getItem("nombre_global")
    console.log("Vendedor:", this.vendedor);


    const alert = await this.alertCtrl.create({
      header: 'AVISO, seguro que deseas vender el SIM',
      // subHeader: 'ICC:' +  sims  + '   al P.V:'  + this.pv,
      message: '<b>ICC:</b><br/>' + sims + '   <br/><b>al P.V: </b><br/>' + this.pv,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          // handler: (alertData) => { //takes the data 
          //     console.log(alertData.name1);
          // }
          handler: async (alertData) => {
            console.log('Se manda asigna la venta');

            console.log("Sim:", sims);


            this.vendedor = await localStorage.getItem("nombre_global")
            console.log("Vendedor:", this.vendedor);




            const params = {
              ICCI: sims
            }

            console.log("para", params)

            await this.updateventasim.UpdateVentaSim(params).then(async resp => {

              console.log("resp", resp)

              const alert = await this.alertCtrl.create({
                header: 'Venta registrada con éxito.',
                // subHeader: 'SubTitle',  
                // message: 'This is an alert message',  
                buttons: ['OK']
              });
              await alert.present();

              // refresh
              this.att();



              // this.sims = resp.data;

            }).catch(async error => {
              /* Código a realizar cuando se rechaza la promesa */
              console.log("NO paso chido", error)

              const alert = await this.alertCtrl.create({
                header: 'Error en red.',
                // subHeader: 'SubTitle',  
                // message: 'This is an alert message',  
                buttons: ['OK']
              });
              await alert.present();






            });




          }
        }
      ]
    });





    await alert.present();
  }










}
