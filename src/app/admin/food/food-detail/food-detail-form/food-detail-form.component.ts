import { FooddetailService } from './../../../../fooddetail.service';
import { OutletService } from './../../../../outlet.service';
import { FoodtypeService } from './../../../../foodtype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { BrowserModule } from '@angular/platform-browser';


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

  outletkey$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodtypeService: FoodtypeService,
    private fooddetailService: FooddetailService,
    outletService: OutletService,
    foodTypeService: FoodtypeService) {
    this.outlets$ = outletService.getOutletList();
    this.foodtypes$ = foodTypeService.getFoodtypesList();

    this.outletkey$ = outletService.getOutletkeyListnew();

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.fooddetailService.get(this.id).take(1).subscribe(o => this.fooddetail = o);
   }

  save(outlet,address) {
    if (this.id) this.fooddetailService.update(this.id, outlet);
    else this.fooddetailService.create(this.fooddetail);

    this.router.navigate(['/admin/food/fooddetail']);
  }

  ngOnInit() {
  }
}
