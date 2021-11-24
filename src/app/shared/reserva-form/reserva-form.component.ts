import { Component, OnInit } from '@angular/core';
import {Reserva} from "../models/user.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

  value: Reserva ;
  editForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private ReservaSvc: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state?.['value'];
    this.initForm();
  }

  ngOnInit(): void {
    if( typeof this.value === 'undefined'){
      this.router.navigate(['reserva']);
    }else {
      this.editForm.patchValue(this.value);
    }
  }

  isValidField(field: string): string {
    const validatedField = this.editForm.get(field);
    // @ts-ignore
    return (!validatedField.valid && validatedField.touched)
      // @ts-ignore
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }
  onGuardar(){
    console.log("Guardado" , this.editForm.value);
    if(this.editForm.valid){
      const reserva = this.editForm.value;
      const  reservaId = this.value?.resId || null ;
      this.ReservaSvc.onGuardarReserva(reserva, reservaId)
    }
  }

  private initForm(): void {
    this.editForm = this.fb.group({
      ubicacion: ['', [Validators.required]],
      llegada: ['', [Validators.required]],
      salida: ['', [Validators.required]],
      pasajeros: ['', [Validators.required]],
    })
  }
}
