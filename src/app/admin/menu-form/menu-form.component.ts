import { MenuService } from './../../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'menu-from',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  menu = {};
  id;
//  address={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.menuService.get(this.id).take(1).subscribe(o => this.menu = o);
   }

  save(menu) {
    if (this.id) this.menuService.update(this.id, menu);
    else this.menuService.create(this.menu);

    this.router.navigate(['/admin/menu']);
  }

  ngOnInit() {
  }

}
