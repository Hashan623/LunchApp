//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class FoodtypeService {

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
   this.db.list('/foodtypes').push(foodtype);
  // this.db.list('/address').push(address);
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
