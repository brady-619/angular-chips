import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetSimsAVenderAttService } from '../services/get-sims-a-vender-att.service';
import { InsertLogVentaSimsService  } from '../services/insert-log-venta-sims.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UpdateVentaSimService } from 'src/app/services/update-venta-sim.service';
import { GetSims5Service } from 'src/app/services/get-sims-5.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { GetSearchIccScanService } from 'src/app/services/get-search-icc-scan.service';

//npm i phonegap-plugin-barcodescanner --force 
// npm i @ionic-native/barcode-scanner --force  
// % ionic cap sync     

@Component({
  selector: 'app-ventas-sims',
  templateUrl: './ventas-sims.page.html',
  styleUrls: ['./ventas-sims.page.scss'],
})
export class VentasSimsPage implements OnInit {

  constructor(private getsearchicc: GetSearchIccScanService, private getsims5: GetSims5Service, private insertLogSims : InsertLogVentaSimsService, private updateventasim: UpdateVentaSimService, private router: Router, private simsAtt: GetSimsAVenderAttService, public alertCtrl: AlertController,private barcodeScanner: BarcodeScanner ) { }

  pv: any;
  data: any;
  vendedor: any;
  sims: any;
  num_sim:any;
  sim:any;



  code: any;


  simForm = new FormGroup({
    num_sim: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  });



  ngOnInit() {
  }


  regresar() {




    this.router.navigate(['/tabs/tab2'])
  }


  async ionViewWillEnter() {
    this.pv = await localStorage.getItem("pv_a_vender")
    // console.log("Pv a vender", this.pv)
  }




  async att() {
    // console.log("Ingresaste a AT&T")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'AT&T'

    }

    // console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      // console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      // console.log("NO paso chido", error)
    });




  }

  async bait() {
    // console.log("Ingresaste a BAIT")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'BAIT'

    }

    // console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      // console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      // console.log("NO paso chido", error)
    });

  }
  async movistar() {
    // console.log("Ingresaste a MOVISTAR")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'MOVISTAR'

    }

    // console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      // console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });

  }
  async unefon() {
    // console.log("Ingresaste a UNEFON")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params = {
      vendedor: this.vendedor, compania: 'UNEFON'

    }

    // console.log("para", params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp => {

      // console.log("resp", resp)

      this.sims = resp.data;

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      // console.log("NO paso chido", error)
    });

  }


  async vender(ICCI: any, DN:any, COMPANIA:any) {

    // OBTENEMOS INFO A REQUEST LOG
    // console.log("Sim:", ICCI, DN,COMPANIA);
    this.vendedor = await localStorage.getItem("nombre_global")
    // console.log("Vendedor:", this.vendedor);
    // console.log("Pv a vender", this.pv)

    // 👇️ const now: Date
    var todayDate = new Date().toISOString().slice(0, 10);
    // console.log(todayDate);
                
              const request = {
                ICCI: ICCI,
                DN: DN,
                VENDEDOR: this.vendedor,
                PV: this.pv,
                COMPANIA: COMPANIA,
                FECHA_VENTA: todayDate
              }



    const alert = await this.alertCtrl.create({
      header: 'AVISO, seguro que deseas vender el SIM',
      // subHeader: 'ICC:' +  sims  + '   al P.V:'  + this.pv,
      message: '<b>ICC:</b><br/>' + ICCI + '   <br/><b>al PDV: </b><br/>' + this.pv +  '   <br/><b>de compañia: </b><br/>' + COMPANIA,
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

            // console.log("Sim:", ICCI);


            this.vendedor = await localStorage.getItem("nombre_global")
            // console.log("Vendedor:", this.vendedor);




            const params = {
              ICCI: ICCI
            }

            // console.log("para", params)

            await this.updateventasim.UpdateVentaSim(params).then(async resp => {

              // console.log("resp", resp)








              // Se crea el log de venta CON REQUEST HECHO ANTES

              await this.insertLogSims.InsertLogVentaSims(request).then(async resp => {

                // console.log("la resp del servicio log es:", resp)
                this.data = resp.data;
            
                // console.log(this.data)
              });









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




// async bsim(sim:any){
//   console.log("La sim enviada es", sim);
  

// }


async buscar() {

console.log(this.num_sim);
this.vendedor = await localStorage.getItem("nombre_global")
console.log(this.vendedor);

const params5 = {
  vendedor: this.vendedor, 
  icci: '%'+this.num_sim+'F'

}

await this.getsims5.GetSims5(params5).then(async resp => {

  console.log("resp", resp)

  this.sims = resp.data;

  if (this.sims == undefined || this.sims == false) {
    const alert = await this.alertCtrl.create({
      header: 'No se encontro SIM con ICC:' + this.num_sim,
      // subHeader: 'SubTitle',  
      // message: 'This is an alert message',  
      buttons: ['OK']
    });
    this.sims = false;

    await alert.present();
  
  }
  else{
    

  this.sims = resp.data;
  }


  








}).catch(error => {
  /* Código a realizar cuando se rechaza la promesa */
  console.log("NO paso chido", error)
});





}




async scan(){
  console.log("scan");

  // const alert = await this.alertCtrl.create({
  //         header: 'click'+ this.sims,
  //         // subHeader: 'SubTitle',  
  //         // message: 'This is an alert message',  
  //         buttons: ['OK']
  //       });
  //       await alert.present();
      // undefined false


this.vendedor = await localStorage.getItem("nombre_global")
// console.log(this.vendedor);

await this.barcodeScanner.scan().then(async barcodeData => {
    console.log('Barcode data', barcodeData);
    this.code = barcodeData.text;
    console.log('Barcode data', this.code);

    


const paramsqr = {
  vendedor: this.vendedor, 
  icci: this.code

}


    await this.getsearchicc.GetSearchIccScan(paramsqr).then(async resp => {
      console.log("resp", resp)
    
       this.sims = resp.data;

      // EVALUA QUE SEA MAS DE 3 DIGITOS
      if (this.sims == undefined || this.sims == false) {
        const alert = await this.alertCtrl.create({
          header: 'No se encontro SIM con ICC:' + this.code,
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']
        });
        this.sims = false;

        await alert.present();
      
      }
      else{
        

      this.sims = resp.data;
      }

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });

    






   }).catch(err => {
       console.log('Error', err);
   });
  
}


}
