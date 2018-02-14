//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Address} from './models/address';

import { UUID } from 'angular2-uuid';

@Injectable()
export class OutletService {
  ID: string

  private addressPath: string = '/address';


  address: FirebaseObjectObservable<Address> = null;
  addresses: FirebaseListObservable<Address[]> = null;

  constructor(private db: AngularFireDatabase) { }

  getOutletList() {
    return this.db.list('/outlets', {
      query: {
        orderByChild: 'name'
      }
    });
  }
//////////////////////////////////////////
  getOutletkeyListnew() {
    return this.db.list('/outlets', {
      query: {
        orderByChild: 'key'
      }
    });
  }


  getAddress(key: string): FirebaseObjectObservable<Address> {
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }

  create(outlet, address: Address) {

    this.ID = UUID.UUID();
    this.db.database.ref('/outlets').child(this.ID).set(outlet);
   //this.db.list('/outlets').push(outlet);




  // this.db.list('/address').push(address);

     const addresses = this.db.list('/address');
     addresses.push(address);
  }

  update(outletId, outlet) {
    return this.db.object('/outlets/' + outletId).update(outlet);
  }

  getAll() {
    return this.db.list('/outlets');
  }

  get(outletId) {
    return this.db.object('/outlets/' + outletId)
  }
}
