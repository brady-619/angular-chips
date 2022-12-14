import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'sucursal',
    loadChildren: () => import('./sucursal/sucursal.module').then( m => m.SucursalPageModule)
  },
  {
    path: 'ventas-sims',
    loadChildren: () => import('./ventas-sims/ventas-sims.module').then( m => m.VentasSimsPageModule)
  },
  // {
  //   path: 'modal-info',
  //   loadChildren: () => import('./modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
