import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  nombre:any;

  constructor(private router: Router, private login: LoginService) { }



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
      console.log("params env",params)

      await this.login.Login(params).then(respuesta=>{
      console.log("la resp del serv es:",respuesta)


      this.nombre = respuesta.data.nombre;
      /*global*/
      localStorage.setItem("nombre_global",this.nombre)


      
      if (respuesta.status=='000'){
        this.router.navigate(['/tabs/tab1'])



      }
      else{
        alert("usuario no registrado")
      }
    
      });
    

      
      }
      else{
        alert("Favor de llenar todos los campos")

      }

    }

}
