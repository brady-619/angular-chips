import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.page.html',
  styleUrls: ['./sucursal.page.scss'],
})
export class SucursalPage implements OnInit {

  constructor(private router: Router,private geolocation: Geolocation) { }

  ngOnInit() {
  }


  salir() {

    localStorage.setItem("nombre_global", "")
    /*global*/
    localStorage.setItem("idclientes_global", "")


    this.router.navigate(['/login'])
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
