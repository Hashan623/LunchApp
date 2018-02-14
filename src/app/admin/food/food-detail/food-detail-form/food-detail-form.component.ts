import { FooddetailService } from './../../../../fooddetail.service';
import { OutletService } from './../../../../outlet.service';
import { FoodtypeService } from './../../../../foodtype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { BrowserModule } from '@angular/platform-browser';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'food-detail-form',
  templateUrl: './food-detail-form.component.html',
  styleUrls: ['./food-detail-form.component.css']
})
export class FoodDetailFormComponent implements OnInit {
  fooddetail = {};
  id;
  outlets$;
  foodtypes$;

  ID: string;

  outletkey$;

  uuid: string = UUID.UUID();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodtypeService: FoodtypeService,
    private fooddetailService: FooddetailService,
    outletService: OutletService,
    foodTypeService: FoodtypeService) {
    this.outlets$ = outletService.getOutletList();
    this.foodtypes$ = foodTypeService.getFoodtypesList();

    this.id = this.route.snapshot.paramMap.get('id');

    this.ngOnInit

    if (this.id) this.fooddetailService.get(this.id).take(1).subscribe(o => this.fooddetail = o);


   }

  save(outlet,address, uuid) {
    if (this.id) this.fooddetailService.update(this.id, outlet);
    else this.fooddetailService.create(this.fooddetail, this.uuid);

    this.router.navigate(['/admin/food/fooddetail']);
  }

  ngOnInit() {
  }

}
