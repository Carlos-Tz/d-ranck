import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { Cicle } from '../models/cicle';

@Injectable({
  providedIn: 'root'
})
export class ApiCicleService {
  public cicleList!: AngularFireList<any>;
  public cicleObject!: AngularFireObject<any>;
  public lastCicleRef!: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, public toastr: ToastrService) { }

  AddCicle(cicle: Cicle) {
    this.db.database.ref().child('ranchlook/cicle-list/'+ cicle.id).once("value", snapshot => {
      if(snapshot.exists()){
        this.toastr.error('No guardado, ya existe un registro con este nombre!');
        return true;
      }
      this.toastr.success('Guardado!');
      this.db.database.ref().child('ranchlook/cicle-list/'+ cicle.id).set(cicle);
      return false;
    });
    //this.db.list('ranchlook/cicle-list').push(cicle);
  }
  
  GetCicleList() {
    this.cicleList = this.db.list('ranchlook/cicle-list')
    return this.cicleList;
  }
  
  GetCicle(key: string) {
    this.cicleObject = this.db.object('ranchlook/cicle-list/' + key);
    return this.cicleObject;
  }

  UpdateCicle(cicle: Cicle, key: string) {
    this.db.object('ranchlook/cicle-list/' + key)
    .update(cicle);
  }

  DeleteCicle(key: string) {
    this.cicleObject = this.db.object('ranchlook/cicle-list/' + key);
    this.cicleObject.remove();
  }

  GetLastCicle(){
    this.lastCicleRef = this.db.list('ranchlook/cicle-list/', ref => ref.limitToLast(1)).valueChanges();
    return this.lastCicleRef;
  }
}
