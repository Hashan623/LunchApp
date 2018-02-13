import { UUID } from 'angular2-uuid';
import { FoodDetail } from './../models/fooddetail';
import { FoodType } from './../models/foodtype';
import { HttpModule } from '@angular/http';
import { XxxService } from './../xxx.service';
import { FoodtypeService } from './../foodtype.service';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-detail-type',
  templateUrl: './detail-type.component.html',
  styleUrls: ['./detail-type.component.css'],
})
export class DetailTypeComponent implements OnInit{
  someData$;
  foodtypes$;
  selected;
  selectedData$;
  foodDetails : FoodDetail[];

  constructor(private _foodTypeService: FoodtypeService,_xxService: XxxService) 
  { 
    this.foodtypes$ = _foodTypeService.getFoodtypesList();
    this.selectedData$ = _xxService.getFooddetailsList();
    //var data = this.selectedData$.val();
    console.log(this.selectedData$);
  }

  onSelect(selected){
    console.log(selected);
    console.log(this.selectedData$);
    this.selectedData$ = this.selectedData$.filter(x => x.foodType == selected);
    console.log(this.selectedData$);
    //this.selectedData$ = _xxService.getFooddetailsList();
  }

  ngOnInit(){}

}
