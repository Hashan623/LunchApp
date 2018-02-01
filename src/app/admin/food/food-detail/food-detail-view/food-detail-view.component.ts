import { FoodDetail } from './../../../../models/fooddetail';
import { FooddetailService } from './../../../../fooddetail.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'food-detail-view',
  templateUrl: './food-detail-view.component.html',
  styleUrls: ['./food-detail-view.component.css']
})
export class FoodDetailViewComponent implements OnInit {

  fooddetails: FoodDetail[];

  subscription: Subscription;
  tableResource: DataTableResource<FoodDetail>;
  items: FoodDetail[] = [];
  itemCount: number;

  constructor(private fooddetailService: FooddetailService) {
    this.subscription = this.fooddetailService.getAll()
    .subscribe(fooddetails => {
      this.fooddetails = fooddetails;
      this.initializeTable(fooddetails);
    });
   }

   private initializeTable(fooddetails: FoodDetail[]) {
    this.tableResource = new DataTableResource(fooddetails);
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
      this.fooddetails.filter(o => o.fname.toLowerCase().includes(query.toLowerCase())) :
      this.fooddetails;

      this.initializeTable(filteredOutlets);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
