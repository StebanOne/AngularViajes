import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ReservaFormModule} from "../../shared/reserva-form/reserva-form.module";


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    ReservaFormModule
  ]
})
export class EditModule { }
