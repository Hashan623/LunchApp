import { Menu } from './../../models/menu';
import { Subscription } from 'rxjs/Rx';
import { MenuService } from './../../menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css']
})
export class MenuViewComponent implements OnInit, OnDestroy {

  menus: Menu[];

  subscription: Subscription;
  tableResource: DataTableResource<Menu>;
  items: Menu[] = [];
  itemCount: number;

  constructor(private menuService: MenuService) {
    this.subscription = this.menuService.getAll()
    .subscribe(menus => {
      this.menus = menus;
      this.initializeTable(menus);
    });
   }

   private initializeTable(menus: Menu[]) {
    this.tableResource = new DataTableResource(menus);
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
      this.menus.filter(o => o.rice.toLowerCase().includes(query.toLowerCase())) :
      this.menus;

      this.initializeTable(filteredOutlets);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
