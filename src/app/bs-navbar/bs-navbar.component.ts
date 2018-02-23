import { Subscription } from 'rxjs/Rx';
import { UUID } from 'angular2-uuid';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit,enableProdMode} from '@angular/core';
import { UserService } from '../user.service';

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
  //enableProdMode();
  //userDetails;
  private authState: Observable<firebase.User>;

  constructor(private auth: AuthService, private db: AngularFireDatabase,public afAuth: AngularFireAuth,private userService: UserService) {
    
    this.authState =  afAuth.authState;
    auth.appUser$.subscribe(appUser => {this.appUser = appUser});

    //console.log(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]'));
    if(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]') != null)
    {
      let userDetails = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]'));
      console.log(userDetails)
      
        this.userID = userDetails.uid;
        console.log(this.userID);
    
        let userDetailsts = userService.get(this.userID);
    
        this.list = userDetailsts.subscribe(item => {
            console.log(item.userlevelname);
        });
    }
    

  }

  async test(value:string)
  {
    console.log('function 01:'+value);
    //this.userLevel$ = await this.getUserLevel(value);

    console.log('function 02:'+ this.userLevel$);
    this.userLevel$.subscribe(item => {console.log('test : '+ item.UUID)});

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
