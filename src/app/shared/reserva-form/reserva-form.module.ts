import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaFormRoutingModule } from './reserva-form-routing.module';
import { ReservaFormComponent } from './reserva-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ReservaFormComponent
  ],
  imports: [
    CommonModule,
    ReservaFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ReservaFormComponent]
})
export class ReservaFormModule { }
