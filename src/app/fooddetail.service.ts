import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid';

@Injectable()
export class FooddetailService {

  //ID: string = UUID.UUID();
  uuid;

  constructor(private db: AngularFireDatabase) { }

  // getFoodtypesList() {
  //   return this.db.list('/foodtypes', {
  //     query: {
  //       orderByChild: 'isMainMenu',
  //       equalTo: false
  //     }
  //   });
  // }


  // create(fooddetail) {
  //  this.db.list('/fooddetails').push(fooddetail);
  // // this.db.list('/address').push(address);
  // }

  create(fooddetail, uuid) {
    this.uuid = uuid;
    fooddetail.UUID = uuid;
    this.db.database.ref('/fooddetails').child(this.uuid).set(fooddetail)
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
