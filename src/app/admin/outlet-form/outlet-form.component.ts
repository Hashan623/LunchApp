import { ActivatedRoute, Router } from '@angular/router';
import { OutletService } from '../../outlet.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

import {Address} from '../../models/address';

@Component({
  selector: 'outlet-form',
  templateUrl: './outlet-form.component.html',
  styleUrls: ['./outlet-form.component.css']
})
export class OutletFormComponent implements OnInit {
  outlet = {};
  id;
//  address={};

address: Address = new Address();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outletService: OutletService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.outletService.get(this.id).take(1).subscribe(o => this.outlet = o);
   }

  save(outlet,address) {
    if (this.id) this.outletService.update(this.id, outlet);
    else this.outletService.create(this.outlet,this.address);

    this.address = new Address();

    this.router.navigate(['/admin/outlets']);
  }

  ngOnInit() {
  }

}
