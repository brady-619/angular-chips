import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetSimsAVenderAttService } from '../services/get-sims-a-vender-att.service';


@Component({
  selector: 'app-ventas-sims',
  templateUrl: './ventas-sims.page.html',
  styleUrls: ['./ventas-sims.page.scss'],
})
export class VentasSimsPage implements OnInit {

  constructor(private router: Router, private simsAtt: GetSimsAVenderAttService ) { }

  pv:any;
  data:any;
  vendedor:any;

  ngOnInit() {
  }


  regresar() {




    this.router.navigate(['/tabs/tab2'])
  }


  async ionViewWillEnter() {
    this.pv = await localStorage.getItem("pv_a_vender")
    console.log("Pv a vender", this.pv)
  }




  async att(){
    console.log("Ingresaste a AT&T")


    this.vendedor = await localStorage.getItem("nombre_global")

    // this.pv = await localStorage.getItem("pv_a_vender")

    const params ={
      vendedor: this.vendedor, compania: 'AT&T'

    }
    
    console.log("para",params)

    await this.simsAtt.GetSimsAVenderAtt(params).then(resp =>  {
      
      console.log("resp",resp)

      this.data = resp.data;

      }).catch(error=> {
        /* Código a realizar cuando se rechaza la promesa */
        console.log("NO paso chido",error)
      });
  
  
  

  }

  bait(){

  }
  movistar(){

  }
  unefon(){

  }



}
