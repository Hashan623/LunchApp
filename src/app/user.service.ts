import { AppUser } from './models/app-user';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UUID } from 'angular2-uuid';

@Injectable()
export class UserService {

  uuid: string = UUID.UUID();

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      uid : user.uid,
      UUID : this.uuid,
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser> {
    return this.db.object('/users/' + uid);
  }

  // getNavHeaderList(value: string): FirebaseObjectObservable<AppUser> {
  //   console.log('UserLevel 2 : '+ value);
  //   return this.db.object('/userPermissionGroup');
  // }

  getNavHeaderList(value:string) {
    console.log('UserLevel 2 : '+ value);
    return this.db.list('/userPermissionGroup', {
      query: {
        orderByChild: 'userLevelID',
        equalTo : value
      }
    });
  }

  getNavDetailsList(value:string) {
    console.log('UserLevel details : '+ value);
    return this.db.list('/componentsGroup', {
      query: {
        orderByChild: 'UUID',
        equalTo : value
      }
    });
  }

}
