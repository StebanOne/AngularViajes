import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaFormComponent } from './reserva-form.component';

const routes: Routes = [{ path: '', component: ReservaFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaFormRoutingModule { }
