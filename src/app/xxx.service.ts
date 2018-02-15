import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { UUID } from 'angular2-uuid';
import { filter } from 'rxjs/operator/filter';

@Injectable()
export class XxxService {



  constructor(private db: AngularFireDatabase) { }


  getFooddetailsList(value:string) { 
    return this.db.list('/fooddetails', {
       query: {
         orderByChild: 'foodType',
         equalTo : value
       }
    });
  }

}
