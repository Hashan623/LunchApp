import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class ComponentGroupService {

  constructor(private db: AngularFireDatabase) { }


  getComponentNamesList() {
    return this.db.list('/components', {
      query: {
        orderByChild: 'componentName',
      }
    });
  }

}
