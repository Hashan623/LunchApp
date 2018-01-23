import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Order } from './models/order';


@Injectable()
export class OrderService {


  constructor(private db: AngularFireDatabase) { }



      create(order) {

         this.db.list('/orders').push(order);

      }

      update(orderId, order) {
        return this.db.object('/orders/' + orderId).update(order);
      }

      getAll() {
        return this.db.list('/orders');
      }

      get(orderId) {
        return this.db.object('/orders/' + orderId)
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
