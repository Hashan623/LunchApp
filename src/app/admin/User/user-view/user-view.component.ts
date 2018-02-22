

import { User } from './../../../models/user';
import { Subscription } from 'rxjs/Rx';
import { UsercrudService } from './../../../usercrud.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';



@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit, OnDestroy  {


  @Input() user: User;

  users: User[];


      subscription: Subscription;
      tableResource: DataTableResource<User>;
      items: User[] = [];
      itemCount: number;

      constructor(private usercrudService: UsercrudService) {
        this.subscription = this.usercrudService.getAll()
        .subscribe(users => {
          this.users = users;
          this.initializeTable(users);
        });
       }

       private initializeTable(users: User[]) {
        this.tableResource = new DataTableResource(users);
        this.tableResource.query({ offset: 0 })
          .then(items => this.items = items);
        this.tableResource.count()
          .then(count => this.itemCount = count);
       }

       reloadItems(params) {
        if (!this.tableResource) return;

        this.tableResource.query(params)
          .then(items => this.items = items);
       }

      filter(query: String) {
        let filteredUsers = (query) ?
          this.users.filter(o => o.uname.toString().includes(query.toLowerCase())) :
          this.users;

          this.initializeTable(filteredUsers);
      }

      ngOnDestroy() {
        this.subscription.unsubscribe();
      }

      ngOnInit() {
      }

    }
