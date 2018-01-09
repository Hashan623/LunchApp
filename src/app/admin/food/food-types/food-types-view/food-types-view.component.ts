import { FoodtypeService } from './../../../../foodtype.service';
import { FoodType } from './../../../../models/foodtype';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'food-types-view',
  templateUrl: './food-types-view.component.html',
  styleUrls: ['./food-types-view.component.css']
})
export class FoodTypesViewComponent implements OnInit {

  foodtypes: FoodType[];

  subscription: Subscription;
  tableResource: DataTableResource<FoodType>;
  items: FoodType[] = [];
  itemCount: number;

  constructor(private foodtypeService: FoodtypeService) {
    this.subscription = this.foodtypeService.getAll()
    .subscribe(foodtypes => {
      this.foodtypes = foodtypes;
      this.initializeTable(foodtypes);
    });
   }

   private initializeTable(foodtypes: FoodType[]) {
    this.tableResource = new DataTableResource(foodtypes);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count()
      .then(count => this.itemCount = count);
   }

   reloadItems(params) {
    if (!this.tableResource) return;

    this.tableResource.query(params)
      .then(items => this.items = items);
   }

  filter(query: String) {
    let filteredOutlets = (query) ?
      this.foodtypes.filter(o => o.name.toLowerCase().includes(query.toLowerCase())) :
      this.foodtypes;

      this.initializeTable(filteredOutlets);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}