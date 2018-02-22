
import { Componentt } from './../../../models/component';
import { Subscription } from 'rxjs/Rx';
import { ComponentService } from './../../../component.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';



@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.css']
})
export class ComponentViewComponent implements OnInit , OnDestroy{

  @Input() component: Componentt;




  components: Componentt[];


        subscription: Subscription;
        tableResource: DataTableResource<Componentt>;
        items: Componentt[] = [];
        itemCount: number;

        constructor(private componentService: ComponentService) {
          this.subscription = this.componentService.getAll()
          .subscribe(components => {
            this.components = components;
            this.initializeTable(components);
          });
         }

         private initializeTable(components: Componentt[]) {
          this.tableResource = new DataTableResource(components);
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
          let filteredcomponents = (query) ?
            this.components.filter(o => o.componentName.toString().includes(query.toLowerCase())) :
            this.components;

            this.initializeTable(filteredcomponents);
        }

        ngOnDestroy() {
          this.subscription.unsubscribe();
        }

        ngOnInit() {
        }

      }

