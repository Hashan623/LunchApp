

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { UsercrudService } from './../../../usercrud.service';
import { UserlevelsService } from './../../../userlevels.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {};
  id;
  ID: string;
  userlevelss$;

  uuid: string = UUID.UUID();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    userlevelsService: UserlevelsService,
    private usercrudService: UsercrudService) {

      this.userlevelss$ = userlevelsService.getuserlevelsList();
    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.usercrudService.get(this.id).take(1).subscribe(u => this.user = u);
   }

  save(user, uuid) {
    if (this.id) this.usercrudService.update(this.id, user);
    else this.usercrudService.create(this.user, this.uuid);



    this.router.navigate(['/admin/user/users']);
  }

  ngOnInit() {
  }

}
