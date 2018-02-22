

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { UserlevelsService } from './../../../userlevels.service';
//import { OutletService } from './../../../outlet.service';
import { UUID } from 'angular2-uuid';


@Component({
  selector: 'app-userlevels-form',
  templateUrl: './userlevels-form.component.html',
  styleUrls: ['./userlevels-form.component.css']
})
export class UserlevelsFormComponent implements OnInit {

  userlevels = {};
  id;

  uuid: string = UUID.UUID();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userlevelsService: UserlevelsService) {


      this.id = this.route.snapshot.paramMap.get('id');
      this.ngOnInit
      if (this.id) this.userlevelsService.get(this.id).take(1).subscribe(o => this.userlevels = o);
     }

     save(userlevels, uuid) {
      if (this.id) this.userlevelsService.update(this.id, userlevels);
      else this.userlevelsService.create(this.userlevels, this.uuid);



      this.router.navigate(['/admin/userlevels/userlevelss']);
    }

  ngOnInit() {
  }

}
