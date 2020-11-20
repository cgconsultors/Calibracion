import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'volumen',
    loadChildren: () => import('./volumen/volumen.module').then( m => m.VolumenPageModule)
  },
  {
    path: 'velocidad',
    loadChildren: () => import('./velocidad/velocidad.module').then( m => m.VelocidadPageModule)
  },
  {
    path: 'area',
    loadChildren: () => import('./area/area.module').then( m => m.AreaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
