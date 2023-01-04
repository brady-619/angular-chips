import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  nombre:any;
  idvendedor:any;

  constructor(private router: Router, private login: LoginService, public alertCtrl: AlertController) { }



  loginForm = new FormGroup({
    telefono: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  get registerFormControl() {
    return this.loginForm.controls;
  }


  async inicio(){

    console.log("click")


    if(this.loginForm.value.telefono !='' || this.loginForm.value.password !='')
    {
      const params=this.loginForm.value
      // console.log("params env",params)

      await this.login.Login(params).then(async respuesta=>{
      // console.log("la resp del serv es:",respuesta);
      // console.log("la resp del nomb es:",respuesta.data[0].nombre);





      
      if (respuesta.status=='000'){

        console.log(respuesta)

        this.nombre = respuesta.data[0].nombre;

        // console.log("nombre", this.nombre)
        /*global*/
        localStorage.setItem("nombre_global",this.nombre)
  
  
  
        this.idvendedor = respuesta.data[0].idvendedor;
        /*global*/
        localStorage.setItem("idvendedor_global",this.idvendedor)

        this.router.navigate(['/tabs/tab1'])



      }
      else{

        const alert = await this.alertCtrl.create({  
          header: 'Usuario no registrado o inactivo.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  

        // alert("usuario no registrado")
        localStorage.setItem("nombre_global","")
        /*global*/
        localStorage.setItem("idvendedor_global","")

      }
    
      });
    

      
      }
      else{
        alert("Favor de llenar todos los campos")

      }

    }

}
