

import { ActivatedRoute, Router } from '@angular/router';
import { RiderService } from '../../rider.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

import {Address} from '../../models/address';

@Component({
  selector: 'app-rider-form',
  templateUrl: './rider-form.component.html',
  styleUrls: ['./rider-form.component.css']
})
export class RiderFormComponent implements OnInit {
  rider = {};
  id;

  address: Address = new Address();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private riderService: RiderService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.riderService.get(this.id).take(1).subscribe(o => this.rider = o);
   }

  save(rider,address) {
    if (this.id) this.riderService.update(this.id, rider);
    else this.riderService.create(this.rider,this.address);

    this.address = new Address();

    this.router.navigate(['/admin/riders']);
  }

  ngOnInit() {
  }

}

