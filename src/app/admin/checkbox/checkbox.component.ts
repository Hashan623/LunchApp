import { ComponentModel } from './../../models/componentModel';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ComponentGroupService } from './../../component-group.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  components$;
  //dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  observables = [];
  //com : ComponentModel;

  constructor(private componentGroupService: ComponentGroupService
    //, private com : ComponentModel
  ) 
  {
    this.components$ = componentGroupService.getComponentNamesList();

    console.log("Fetching agency data");
    //let observables = [];
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
    console.log(this.observables);
  }

  ngOnInit() {
    // this.dropdownList = [
    //   { "id": 1, "itemName": "India" },
    //   { "id": 2, "itemName": "Singapore" },
    //   { "id": 3, "itemName": "Australia" },
    //   { "id": 4, "itemName": "Canada" },
    //   { "id": 5, "itemName": "South Korea" },
    //   { "id": 6, "itemName": "Germany" },
    //   { "id": 7, "itemName": "France" },
    //   { "id": 8, "itemName": "Russia" },
    //   { "id": 9, "itemName": "Italy" },
    //   { "id": 10, "itemName": "Sweden" }
    // ];
    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}