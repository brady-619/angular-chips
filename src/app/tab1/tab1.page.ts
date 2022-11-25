import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, ) { }
  


  salir(){
    this.router.navigate(['/login'])
  }


  editar(){
    console.log("Aqui")
  }

  eliminar(){
    console.log("el")
  }
}
