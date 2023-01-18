import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';




import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InsertPuntoDeVentaService } from 'src/app/services/insert-punto-de-venta.service';



import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.page.html',
  styleUrls: ['./sucursal.page.scss'],
})
export class SucursalPage implements OnInit {

  nombre:any;
  dueno:any;
  apellido:any;
  tel1:any;
  tel2:any;
  domicilio:any;
  email:any;
  giro:any;
  nombre_global: any;

  latitud:any;
  longitud:any;


  payload: any;
  params:any;

  

  constructor(private insertPuntoVenta: InsertPuntoDeVentaService ,public alertCtrl: AlertController,private router: Router,private geolocation: Geolocation) { }



  pvForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dueno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10)]),
    telefonos: new FormControl('', [Validators.required, Validators.minLength(10)]),
    domicilio: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(1),Validators.email]),
    giro: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  ngOnInit() {
  }

  get registerFormControl() {
    return this.pvForm.controls;
  }



  salir() {

    localStorage.setItem("nombre_global", "")
    /*global*/
    localStorage.setItem("idclientes_global", "")


    this.router.navigate(['/login'])
  }



 async guardar(){

  







  // if(nombre != undefined){
  //   // && dueno != undefined && tel1 != undefined && tel2 != undefined && domicilio != undefined && email != undefined && giro != undefined){
  //   // this.nombre_global = await localStorage.getItem("nombre_global")

  //   // console.log("Ingreso a guardar", nombre, dueno, tel1,tel2, domicilio, email,giro, this.nombre_global)


   await this.geolocation.getCurrentPosition().then(async resp => {
      // resp.coords.latitude
      // resp.coords.longitude
      // console.log(resp.coords.latitude)
      this.latitud = resp.coords.latitude;
      localStorage.setItem("latitud",this.latitud)
      // console.log(resp.coords.longitude)
      this.longitud = resp.coords.longitude;
      localStorage.setItem("longitud",this.longitud)



      //Valores globales a recuperar
     this.nombre_global = await localStorage.getItem("nombre_global");


    //  console.log("Ingreso a guardar", nombre, dueno, apellido,tel1,tel2, domicilio, email,giro, this.nombre_global, this.latitud, this.longitud)



    const params=this.pvForm.value;
  console.log("params1", params)



const params2= {latitud:this.latitud, longitud: this.longitud, vendedor: this.nombre_global}
console.log("params2",params2)


const params3 = { ...params, ...params2 };
console.log(params3);





      let data2 = {
    //    data:[{nombre: nombre , dueno: dueno, apellido: apellido,telefono1: tel1, telefono2:tel2, domicilio:domicilio, email:email, giro,vendedor: this.nombre_global, latitud: this.latitud, longitud: this.longitud }]
        data: [params3]
     }

    console.log("data2", data2)








    await this.insertPuntoVenta.InsertPuntoVenta(data2).then(async respuesta => {
      console.log(data2)
      console.log("paso chido", respuesta)


      if (respuesta.status = "000") {
        // alert("Carga realizada con éxito.")
        const alert = await this.alertCtrl.create({  
          header: 'Registro creado con éxito.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  

      }
      else {
        // alert("Error en carga.")
        const alert = await this.alertCtrl.create({  
          header: 'Error en carga.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  
      }

    }).catch(error => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido", error)
    });









     }).catch(async error => {
      //  console.log('Error getting location', error);

       const alert = await this.alertCtrl.create({  
        header: 'Error getting location.',  
        // subHeader: 'SubTitle',  
        // message: 'This is an alert message',  
        buttons: ['OK']  
      });  
      await alert.present();  
       
       
     });





 


 
  // }
  // else
  // {
  //   // alert("Favor de llenar todos los campos")

  //   const alert = await this.alertCtrl.create({  
  //     header: 'Favor de llenar todos los campos.',  
  //     // subHeader: 'SubTitle',  
  //     // message: 'This is an alert message',  
  //     buttons: ['OK']  
  //   });  
  //   await alert.present();  


  // }

    }










prueba(){
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    console.log(resp)
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });
}

  
    
}
