
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { OrderService } from './../../../order.service';
import { OutletService } from './../../../outlet.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {

  order = {};
  id;

  outlets$;

  uuid: string = UUID.UUID();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    outletService: OutletService,
    private orderService: OrderService) {

      this.outlets$ = outletService.getOutletList();
    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.orderService.get(this.id).take(1).subscribe(o => this.order = o);
   }

  save(order, uuid) {
    if (this.id) this.orderService.update(this.id, order);
    else this.orderService.create(this.order, this.uuid);



    this.router.navigate(['/admin/order/orders']);
  }

  ngOnInit() {
  }

}
