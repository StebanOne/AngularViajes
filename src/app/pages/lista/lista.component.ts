import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  reserva$ = this.reservaSvc.reserva;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private reservaSvc: AuthService) { }

  ngOnInit(): void {
  }

  onEdit(item: any):void{
    // @ts-ignore
    this.navigationExtras.state.value = item;
    this.router.navigate(['/edit'], this.navigationExtras);
  }
  onVer(item:any):void{
    // @ts-ignore
    this.navigationExtras.state.value = item;
    this.router.navigate(['/detalles'],  this.navigationExtras);
  }
  async onDelete(Id: string): Promise<void> {
    try {
      await this.reservaSvc.onEliminarReserva(Id);
      alert('Deleted');
    } catch (err) {
      console.log(err);
    }
  }
}
