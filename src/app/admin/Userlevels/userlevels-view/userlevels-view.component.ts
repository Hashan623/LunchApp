
import { Userlevels } from './../../../models/userlevels';
import { Subscription } from 'rxjs/Rx';
import { UserlevelsService } from './../../../userlevels.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';



@Component({
  selector: 'app-userlevels-view',
  templateUrl: './userlevels-view.component.html',
  styleUrls: ['./userlevels-view.component.css']
})
export class UserlevelsViewComponent implements  OnInit, OnDestroy {

  @Input() userlevels: Userlevels;




  userlevelss: Userlevels[];


      subscription: Subscription;
      tableResource: DataTableResource<Userlevels>;
      items: Userlevels[] = [];
      itemCount: number;

      constructor(private userlevelsService: UserlevelsService) {
        this.subscription = this.userlevelsService.getAll()
        .subscribe(userlevelss => {
          this.userlevelss = userlevelss;
          this.initializeTable(userlevelss);
        });
       }

       private initializeTable(userlevelss: Userlevels[]) {
        this.tableResource = new DataTableResource(userlevelss);
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
        let filteredOrders = (query) ?
          this.userlevelss.filter(o => o.userlevelname.toString().includes(query.toLowerCase())) :
          this.userlevelss;

          this.initializeTable(filteredOrders);
      }

      ngOnDestroy() {
        this.subscription.unsubscribe();
      }

      ngOnInit() {
      }

    }
