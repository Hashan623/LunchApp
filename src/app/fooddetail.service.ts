import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class FooddetailService {

  constructor(private db: AngularFireDatabase) { }

  // getFoodtypesList() { 
  //   return this.db.list('/foodtypes', {
  //     query: {
  //       orderByChild: 'isMainMenu',
  //       equalTo: false
  //     }
  //   });
  // }

  create(fooddetail) {
   this.db.list('/fooddetails').push(fooddetail);
  // this.db.list('/address').push(address);
  }

  update(fooddetailId, fooddetail) {
    return this.db.object('/fooddetails/' + fooddetailId).update(fooddetail);
  }

  getAll() {
    return this.db.list('/fooddetails');
  }

  get(fooddetailId) {
    return this.db.object('/fooddetails/' + fooddetailId)
  }
}
