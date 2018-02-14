import { FoodtypeService } from './../../../../foodtype.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { BrowserModule } from '@angular/platform-browser';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'food-types-form',
  templateUrl: './food-types-form.component.html',
  styleUrls: ['./food-types-form.component.css']
})
export class FoodTypesFormComponent implements OnInit {
  foodtype = {};
  id;
  //  address={};
  uuid: string = UUID.UUID();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foodtypeService: FoodtypeService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.foodtypeService.get(this.id).take(1).subscribe(o => this.foodtype = o);
  }

  save(outlet, address, uuid) {
    if (this.id) this.foodtypeService.update(this.id, outlet);
    else this.foodtypeService.create(this.foodtype, this.uuid);

    this.router.navigate(['/admin/food/foodtypes']);
  }

  ngOnInit() {
  }
}
