import { FormGroup, FormControl } from '@angular/forms';
import { ComponentGroupService } from './../../component-group.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-group',
  templateUrl: './component-group.component.html',
  styleUrls: ['./component-group.component.css']
})
export class ComponentGroupComponent implements OnInit {
  group = {};
  components$;
  myForm: FormGroup;

  constructor(private componentGroupService: ComponentGroupService) {
    this.components$ = componentGroupService.getComponentNamesList();
   }
   

  ngOnInit() {
    this.myForm = new FormGroup({
      i: new FormControl()
   });
  }

}
