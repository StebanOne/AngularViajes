import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public isLogged = false;
  constructor(private authSvc: AuthService, private router: Router) { }

  async ngOnInit() {
    //
    // console.log('Navbar');
    // const user = await this.authSvc.getCurrentUser();
    // if(user){
    //   this.isLogged = true;
    //   console.log('Usuario ->', user);
    // }
  }

  salir(){
    this.authSvc.logout();
    this.router.navigate(['/home']);
  }

}
