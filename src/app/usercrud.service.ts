import { AppUser } from './models/app-user';


import * as firebase from 'firebase';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UUID } from 'angular2-uuid';


@Injectable()
export class UsercrudService {

  ID: string

    constructor(private db: AngularFireDatabase) { }

    uuid;

        create(user, uuid) {

           this.uuid = uuid;
           user.UUID = uuid;

           this.db.database.ref('/users').child(this.uuid).set(user);


        }

        update(userId, user) {
          return this.db.object('/users/' + userId).update(user);
        }

        getAll() {
          return this.db.list('/users');
        }

        get(userId) {
          return this.db.object('/users/' + userId)
        }

      }
