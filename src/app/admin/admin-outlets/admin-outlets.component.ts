import { Outlet } from './../../models/outlet';
import { Subscription } from 'rxjs/Rx';
import { OutletService } from './../../outlet.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

import { Address } from './../../models/address';
@Component({
  selector: 'admin-outlets',
  templateUrl: './admin-outlets.component.html',
  styleUrls: ['./admin-outlets.component.css']
})
export class AdminOutletsComponent implements OnInit, OnDestroy {
  outlets: Outlet[];
  address: Address[];


  subscription: Subscription;
  tableResource: DataTableResource<Outlet>;
  items: Outlet[] = [];
  itemCount: number;

  constructor(private outletService: OutletService) {
    this.subscription = this.outletService.getAll()
    .subscribe(outlets => {
      this.outlets = outlets;
      this.initializeTable(outlets);
    });
   }

   private initializeTable(outlets: Outlet[]) {
    this.tableResource = new DataTableResource(outlets);
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
      this.outlets.filter(o => o.name.toLowerCase().includes(query.toLowerCase())) :
      this.outlets;

      this.initializeTable(filteredOutlets);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
