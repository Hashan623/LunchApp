//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid';

@Injectable()
export class FoodtypeService {

  ID: string

  constructor(private db: AngularFireDatabase) { }

  // getFoodtypesList() {
  //   return this.db.list('/foodtypes', {
  //     query: {
  //       orderByChild: 'name'
  //     }
  //   });
  // }

  getFoodtypesList() {
    return this.db.list('/foodtypes', {
      query: {
        orderByChild: 'isMainMenu',
        equalTo: false
      }
    });
  }

  create(foodtype) {
    this.ID = UUID.UUID();
   // this.db.list('/foodtypes').push(foodtype);
   this.db.database.ref('/foodtypes').child(this.ID).set(foodtype);


  }

  update(foodtypeId, foodtype) {
    return this.db.object('/foodtypes/' + foodtypeId).update(foodtype);
  }

  getAll() {
    return this.db.list('/foodtypes');
  }

  get(foodtypeId) {
    return this.db.object('/foodtypes/' + foodtypeId)
  }
}
