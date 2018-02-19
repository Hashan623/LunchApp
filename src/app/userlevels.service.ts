
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Userlevels } from './models/userlevels';
import { UUID } from 'angular2-uuid';


@Injectable()
export class UserlevelsService {

  ID: string

  constructor(private db: AngularFireDatabase) { }

  uuid;

  create(userlevels, uuid) {

    this.uuid = uuid;
    userlevels.UUID = uuid;
    //  this.db.list('/orders').push(order);
    this.db.database.ref('/userlevelss').child(this.uuid).set(userlevels);

  }

  update(userlevelsId, userlevels) {
    return this.db.object('/userlevelss/' + userlevelsId).update(userlevels);
  }

  getAll() {
    return this.db.list('/userlevelss');
  }

  get(userlevelsId) {
    return this.db.object('/userlevelss/' + userlevelsId)
  }


}
