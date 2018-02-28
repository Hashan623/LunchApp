import { filter } from 'rxjs/operator/filter';
import { UUID } from 'angular2-uuid';
import { FoodDetail } from './../models/fooddetail';
import { FoodType } from './../models/foodtype';
import { HttpModule } from '@angular/http';
import { FoodtypeService } from './../foodtype.service';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { XxxService } from '../xxx.service';

@Component({
  selector: 'app-detail-type',
  templateUrl: './detail-type.component.html',
  styleUrls: ['./detail-type.component.css'],
  //providers : [XxxService],
})
export class DetailTypeComponent implements OnInit{
  someData$;
  foodtypes$;
  selected;
  selectedData$ : any;
  foodDetails : FoodDetail[];
  _xxServices : XxxService;

  constructor(private _foodTypeService: FoodtypeService, _xxService: XxxService)
  {
    this.foodtypes$ = _foodTypeService.getFoodtypesList();
    this._xxServices = _xxService;

    console.log(this.selectedData$);
  }

  onSelect(selected){
    this.selectedData$ = this._xxServices.getFooddetailsList(selected);
  }

  ngOnInit(){}

}
