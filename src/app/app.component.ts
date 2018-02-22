import { UUID } from 'angular2-uuid';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list;
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (!user) return;
      let userDetails = userService.get(user.uid);

      this.list = userDetails.subscribe(item => {
        if (item.email != null) {
          //console.log(item)                                         Dont remove this if condition(Dasun Mendis)
        } else {
          userService.save(user);
        }
      });

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }


}
