import { FoodtypeService } from './foodtype.service';
import { RiderService } from './rider.service';
import { OutletService } from './outlet.service';
import { UserService } from './user.service';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from "angular-4-data-table";

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminCustomersComponent } from './admin/admin-customers/admin-customers.component';
import { AdminOutletsComponent } from './admin/admin-outlets/admin-outlets.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { OutletFormComponent } from './admin/outlet-form/outlet-form.component';

import { AdminRidersComponent } from './admin/admin-riders/admin-riders.component';
import { RiderFormComponent } from './admin/rider-form/rider-form.component';

//import { AgmCoreModule } from '@agm/core';


import { AgmCoreModule } from 'angular2-google-maps/core';
import { FoodTypesFormComponent } from './admin/food/food-types/food-types-form/food-types-form.component';
import { FoodTypesViewComponent } from './admin/food/food-types/food-types-view/food-types-view.component';


const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyBqPVJZVjdiDEDcooC4sjLb46j9oIO6BUs',
});

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    AdminCustomersComponent,
    AdminOutletsComponent,
    ProductsComponent,
    LoginComponent,
    OutletFormComponent,

    AdminRidersComponent,
    RiderFormComponent,
    FoodTypesFormComponent,
    FoodTypesViewComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AgmCoreModule.forRoot({

    //        apiKey: 'AIzaSyBqPVJZVjdiDEDcooC4sjLb46j9oIO6BUs'

    //      }),
    googleMapsCore,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'checkout', component: CheckOutComponent},
      {path: 'login', component: LoginComponent},

      {
        path: 'admin/customers', component: AdminCustomersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/outlets', component: AdminOutletsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/outlets/new', component: OutletFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/outlets/:id', component: OutletFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/riders', component: AdminRidersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/riders/new', component: RiderFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/riders/:id', component: RiderFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/food/foodtypes', component: FoodTypesViewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/food/foodtypes/new', component: FoodTypesFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin/food/foodtypes/:id', component: FoodTypesFormComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    OutletService,
    RiderService,
    FoodtypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
