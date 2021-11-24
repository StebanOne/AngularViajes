import { Injectable } from '@angular/core';
import { Reserva } from 'src/app/shared/models/user.interface'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// @ts-ignore
import {User} from 'firebase';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {first, Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {privateEntriesToIndex} from "@angular/compiler-cli/src/metadata/index_writer";
import {map} from "rxjs/operators";
import {resolve} from "@angular/compiler-cli";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  reserva: Observable<Reserva[]>;
  private  reservaCollection : AngularFirestoreCollection<Reserva>;
  public user: User;
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
  this.reservaCollection = afs.collection<Reserva>('reserva');
  this.getReserva();
  }

  // @ts-ignore
  async login(email: string, password: string){
    try {
    const result = await this.afAuth.signInWithEmailAndPassword(
       email,
       password
    );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // @ts-ignore
  async register(email: string, password: string) {
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    return result;
    } catch (error){
      console.log(error)
    }
  }

  async logout() {
    try{
      await this.afAuth.signOut();
    }
    catch (error){
    }
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }


  onEliminarReserva(resId: string | undefined): Promise<void>{
    return new Promise( async (resolve, reject) =>{
      try {
        const result = await this.reservaCollection.doc(resId).delete();
        resolve(result);
      } catch (err){
        // @ts-ignore
        reject(err.message);
      }
    });

  }

  onGuardarReserva(reserva: Reserva, resId: string | null): Promise<void>{

    return new Promise( async (resolve, reject) =>{
      try {
        const id = resId || this.afs.createId();
        const data = {id, ...reserva};
        const result = this.reservaCollection.doc(id).set(data);
        resolve(result);
      } catch (err){
        // @ts-ignore
        reject(err.message);
      }
    });
  }

  private getReserva(): void{
    this.reserva = this.reservaCollection.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data() as Reserva))
    );
  }

}

