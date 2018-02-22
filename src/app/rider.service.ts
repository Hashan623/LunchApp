import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Rider } from './models/rider';

import { Address } from './models/address';
import { UUID } from 'angular2-uuid';

@Injectable()
export class RiderService {
  uuid;

  private addressPath: string = '/address';


  address: FirebaseObjectObservable<Address> = null;
  addresses: FirebaseListObservable<Address[]> = null;


  constructor(private db: AngularFireDatabase) { }


  getAddress(key: string): FirebaseObjectObservable<Address> {
    this.address = this.db.object(`${this.addressPath}/${key}`);
    return this.address;
  }


  create(rider, address: Address, uuid) {
    rider.googleid = 'null';
    rider.active = 'false';

    this.uuid = uuid;
    rider.UUID = uuid;
    this.db.database.ref('/riders').child(this.uuid).set(rider)
  //  this.db.list('/riders').push(rider);

    const addresses = this.db.list('/address');
    addresses.push(address);
  }

  update(riderId, rider) {
    return this.db.object('/riders/' + riderId).update(rider);
  }

  getAll() {
    return this.db.list('/riders');
  }

  get(riderId) {
    return this.db.object('/riders/' + riderId)
  }

  //  updateRider(active: string, rider: Rider): void {
  //   this.db.object('riders/'+active).update(rider);
  //  }
  // private handleError(error) {
  // console.log(error);
  // }

  // updateActive(riderId: any, active: string): void {
  //   this.db.object('/riders/' + riderId)
  //     .update({ content: active, active: riderId.active });
  // }
}
