import { Subscription } from 'rxjs/Rx';
import { UUID } from 'angular2-uuid';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { UserService } from '../user.service';
import { ComponentGroupService } from '../component-group.service';
import { ComponentGroup } from '../models/componentGroup';
import { Componentt } from '../models/component';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;
  userLevel$;
  userID;
  currentUser;
  list;
  userLevelID;
  navHederList;
  navDetailList;
  navGroupDetailList = [];
  navGroupHeaderList = [];


  private authState: Observable<firebase.User>;

  constructor(private auth: AuthService, private db: AngularFireDatabase, public afAuth: AngularFireAuth, private userService: UserService, private comGroup: ComponentGroup, private componentt: Componentt) {

    this.authState = afAuth.authState;
    auth.appUser$.subscribe(appUser => { this.appUser = appUser });

    //console.log(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]'));
    if (localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]') != null) {

      let userDetails = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]'));
      //console.log(userDetails)

      this.userID = userDetails.uid;
      console.log(this.userID);

      let userDetailsts = userService.get(this.userID);

      this.list = userDetailsts.subscribe(item => {
        this.userLevelID = item.userlevelname;
        console.log(item.userlevelname);
        if (item.userlevelname != null) {
          this.navHederList = userService.getNavHeaderList(this.userLevelID);
          //console.log(this.navHederList);
          this.navHederList.subscribe(i => i.forEach(i => {
            i.userGroup.forEach(a => {
              console.log('UserLevel 10: ' + a.componentGroupName)
              let componentModel = new ComponentGroup;
              componentModel.componentGroupName = a.componentGroupName;
              componentModel.UUID = a.UUID;
              this.navGroupHeaderList.push(componentModel);
            });
          }));
        }

      });
    }
  }

  getUserLevel(value:string) {
    console.log('function :'+value);
    return this.db.list('/users', {
      query: {
        orderByChild: 'uid',
        equalTo: value
      }
    });
  }

  logout() {
    this.navGroupDetailList = [];
    this.navGroupHeaderList = [];
    this.auth.logout();
  }

}
