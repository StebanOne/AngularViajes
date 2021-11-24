import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'lista', loadChildren: () => import('./pages/lista/lista.module').then(m => m.ListaModule) },
  { path: 'edit', loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule) },
  { path: 'detalles', loadChildren: () => import('./pages/detalles/detalles.module').then(m => m.DetallesModule) },
  { path: 'reserva-form', loadChildren: () => import('./shared/reserva-form/reserva-form.module').then(m => m.ReservaFormModule) },
  { path: 'new', loadChildren: () => import('./pages/new/new.module').then(m => m.NewModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
