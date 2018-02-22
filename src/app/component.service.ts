

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable, Component } from '@angular/core';
import { Componentt } from './models/component';
import { UUID } from 'angular2-uuid';



@Injectable()
export class ComponentService {


  ID: string

    constructor(private db: AngularFireDatabase) { }


    uuid;



    create(component, uuid) {

      this.uuid = uuid;
      component.UUID = uuid;
      //  this.db.list('/orders').push(order);
      this.db.database.ref('/components').child(this.uuid).set(component);

    }

    update(componentId, component) {
      return this.db.object('/components/' + componentId).update(component);
    }

    getAll() {
      return this.db.list('/components');
    }

    get(componentId) {
      return this.db.object('/components/' + componentId)
    }


  }
