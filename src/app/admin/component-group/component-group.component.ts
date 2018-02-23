import { AngularFireDatabase } from 'angularfire2/database';
import { ComponentGroup } from './../../models/componentGroup';
import { Componentt } from './../../models/component';
import { ComponentModel } from './../../models/componentModel';
import { FormGroup, FormControl } from '@angular/forms';
import { ComponentGroupService } from './../../component-group.service';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-component-group',
  templateUrl: './component-group.component.html',
  styleUrls: ['./component-group.component.css']
})
export class ComponentGroupComponent implements OnInit {
  //group = {};
  ComponentGroup = {};
  components$;
  selectedItems = [];
  dropdownSettings = {};
  observables = [];

  uuid: string = UUID.UUID();

  constructor(private componentGroupService: ComponentGroupService, private db: AngularFireDatabase) {
    this.components$ = componentGroupService.getComponentNamesList();

    this.components$.subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        let com = new ComponentModel;

        com.isActive = snapshot.isActive;
        com.itemName = snapshot.componentName;
        com.url = snapshot.url;
        com.id = snapshot.UUID;
        this.observables.push(com);
      });
    });
  }

  ngOnInit() {
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Components",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  save(ComponentGroup, uuid) {

    let componentModelGroup = [];

    ComponentGroup.component.forEach(function(current_value) {

      let componentModel = new Componentt;
      componentModel.componentName = current_value.itemName;
      componentModel.uuid = current_value.id;
      componentModel.url = current_value.url;
      componentModel.isActive = current_value.isActive;

      componentModelGroup.push(componentModel);
    });

    ComponentGroup.UUID = this.uuid;
    ComponentGroup.component = componentModelGroup;
    this.db.database.ref('/componentsGroup').child(this.uuid).set(ComponentGroup)
  }

  onItemSelect(item: any) {
  }

  OnItemDeSelect(item: any) {
  }

  onSelectAll(item: any) {
  }
  
  onDeSelectAll(item: any) {
  }
  

}
