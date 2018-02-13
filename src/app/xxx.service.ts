import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid';

@Injectable()
export class XxxService {

  constructor(private db: AngularFireDatabase) { }


  getFooddetailsList() { 
    return this.db.object('/fooddetails', {
      // query: {
      //   orderByChild: 'name'
      // }
    });
  }

}
