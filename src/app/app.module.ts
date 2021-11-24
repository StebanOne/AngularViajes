import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {environment} from "../environments/environment";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ReservaFormModule} from "./shared/reserva-form/reserva-form.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservaFormModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,

  ],
  providers: [AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
