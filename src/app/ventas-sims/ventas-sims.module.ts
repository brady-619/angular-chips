import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasSimsPageRoutingModule } from './ventas-sims-routing.module';

import { VentasSimsPage } from './ventas-sims.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasSimsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VentasSimsPage]
})
export class VentasSimsPageModule {}
