import { Subscription } from 'rxjs/Rx';
import { UUID } from 'angular2-uuid';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit,enableProdMode} from '@angular/core';

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
  //enableProdMode();
  //userDetails;
  private authState: Observable<firebase.User>;

  constructor(private auth: AuthService, private db: AngularFireDatabase,public afAuth: AngularFireAuth) {
    this.authState =  afAuth.authState;
    auth.appUser$.subscribe(appUser => {this.appUser = appUser});

    let userDetails = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]'));
    console.log(userDetails)
    userDetails.uid;
    //console.log(JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]')));
    //this.userDetails.subscribe(i => {this.userID = i.uid});
    
    this.userID = userDetails.uid;
    console.log(this.userID);

    this.userLevel$ = this.getUserLevel(this.userID);

    this.userLevel$.subscribe(item => {console.log('test : '+ item.UUID)});
    console.log('TEST 001 : ' +this.userLevel$);
    // this.authState.subscribe((user: firebase.User) => {

    //   console.log('user is: ' + user.uid);
    //   this.currentUser = user.uid;
    //   this.userLevel$ = this.getUserLevel(user.uid);

    //   this.userLevel$.subscribe(item => console.log(item.displayName));
      
    //   //console.log(this.userLevel$);

    // });

    
    //console.log('first :' + this.userID);
    // this.userLevel$ = this.getUserLevel(this.appUser.$key);
    // console.log(this.appUser.$key);
    // console.log(this.userLevel$);

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
  
  getFooddetailsList(value:string) { 
    return this.db.list('/fooddetails', {
       query: {
         orderByChild: 'foodType',
         equalTo : value
       }
    });
  }

  logout() {
    this.auth.logout();
  }

}
