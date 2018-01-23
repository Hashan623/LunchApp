
import { Order } from './../../../models/order';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from './../../../order.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';


@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css']
})
export class OrdersViewComponent implements OnInit, OnDestroy {

  @Input() order: Order;




    orders: Order[];


    subscription: Subscription;
    tableResource: DataTableResource<Order>;
    items: Order[] = [];
    itemCount: number;

    constructor(private orderService: OrderService) {
      this.subscription = this.orderService.getAll()
      .subscribe(orders => {
        this.orders = orders;
        this.initializeTable(orders);
      });
     }

     private initializeTable(orders: Order[]) {
      this.tableResource = new DataTableResource(orders);
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
      let filteredOrders = (query) ?
        this.orders.filter(o => o.time.toLowerCase().includes(query.toLowerCase())) :
        this.orders;

        let filteredOrdersx = (query) ?
        this.orders.filter(o => o.status.toLowerCase().includes(query.toLowerCase())) :
        this.orders;

        this.initializeTable(filteredOrders);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    ngOnInit() {
    }

    // updateActive(isActive: boolean) {
    //   this.riderService.updateRider(this.rider.riderId, {active: isActive})
    // }


  }
