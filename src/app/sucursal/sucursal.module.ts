import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { SucursalPageRoutingModule } from './sucursal-routing.module';

import { SucursalPage } from './sucursal.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucursalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SucursalPage]
})
export class SucursalPageModule {}
