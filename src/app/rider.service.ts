import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Rider } from './models/rider';

@Injectable()
export class RiderService {

  constructor(private db: AngularFireDatabase) { }

    create(rider) {
      rider.googleid ='null';
      rider.active ='false';
      return this.db.list('/riders').push(rider);
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

     updateRider(active: string, rider: Rider): void {
      this.db.object('riders/'+active).update(rider);
     }
    private handleError(error) {
    console.log(error);
    }

    updateActive(riderId: any, active: string): void {
      this.db.object('/riders/' + riderId)
        .update({ content: active, active: riderId.active });
    }
  }
