//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Address} from './models/address';

@Injectable()
export class OutletService {

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

  getAddress(key: string): FirebaseObjectObservable<Address> {
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }

  create(outlet, address: Address) {
   this.db.list('/outlets').push(outlet);
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
