//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Menu} from './models/menu';

@Injectable()
export class MenuService {

  constructor(private db: AngularFireDatabase) { }


  create(menu) {
   this.db.list('/daymenu').push(menu);
  // this.db.list('/address').push(address);
  }

  update(menuId, menu) {
    return this.db.object('/daymenu/' + menuId).update(menu);
  }

  getAll() {
    return this.db.list('/daymenu');
  }

  get(menuId) {
    return this.db.object('/daymenu/' + menuId)
  }
}
