import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {Reserva} from "../../shared/models/user.interface";
import {AuthService} from "../../auth/services/auth.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  // @ts-ignore
  value : Reserva = null;
  constructor(private router: Router, private ReservaSvc: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    // @ts-ignore
    this.value = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if( typeof this.value === 'undefined'){
      this.router.navigate(['reserva']);
    }
  }
  onEliminar (): void {
    try {
      // @ts-ignore
      this.ReservaSvc.onEliminarReserva(this.value?.resId);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }

  onEdit(): void{
    // @ts-ignore
    this.navigationExtras.state.value = this.value;
    this.router.navigate(['/edit'], this.navigationExtras);
  }

}
