import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import {ReservaFormModule} from "../../shared/reserva-form/reserva-form.module";


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    ReservaFormModule
  ]
})
export class NewModule { }