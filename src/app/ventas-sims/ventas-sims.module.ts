import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasSimsPageRoutingModule } from './ventas-sims-routing.module';

import { VentasSimsPage } from './ventas-sims.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasSimsPageRoutingModule
  ],
  declarations: [VentasSimsPage]
})
export class VentasSimsPageModule {}
