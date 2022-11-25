import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetListadoService } from 'src/app/services/get-listado.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,
    private getlistados: GetListadoService, ) { }
  nombre_global:any;
  idclientes_global:any;
  data:any;


  async ngOnInit() {
     this.idclientes_global = await localStorage.getItem("idclientes_global")
     this.nombre_global = await localStorage.getItem("nombre_global")


console.log("val recibidos", this.idclientes_global, this.nombre_global)


await this.getlistado();


  }
  


  salir(){

    localStorage.setItem("nombre_global","")
    /*global*/
    localStorage.setItem("idclientes_global","")


    this.router.navigate(['/login'])
  }


  editar(sim:any){
    console.log("Aqui",sim)



  }

  eliminar(){
    console.log("el")
  }




 async getlistado(){

  console.log("entro a listado")

  this.idclientes_global = await localStorage.getItem("idclientes_global")
  this.nombre_global = await localStorage.getItem("nombre_global")

  console.log("name es", this.nombre_global)
  console.log("proyecto es", this.idclientes_global)



/*llegue*/
  const params = { idclientes: this.idclientes_global}

  await this.getlistados.Listado(params).then(resp => {

    console.log("la resp del servicio es:", resp)
    this.data = resp.data;


  });


  }





}
