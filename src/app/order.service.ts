import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Order } from './models/order';
import { UUID } from 'angular2-uuid';

@Injectable()
export class OrderService {

  ID: string

  constructor(private db: AngularFireDatabase) { }

  uuid;

      create(order, uuid) {

         this.uuid = uuid;
         order.UUID = uuid;
       //  this.db.list('/orders').push(order);
         this.db.database.ref('/orders').child(this.uuid).set(order);


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

    }
