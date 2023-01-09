import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasSimsPage } from './ventas-sims.page';

const routes: Routes = [
  {
    path: '',
    component: VentasSimsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasSimsPageRoutingModule {}
