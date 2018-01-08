import { ActivatedRoute, Router } from '@angular/router';
import { OutletService } from '../../outlet.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

import { Address } from '../../models/address';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'outlet-form',
  templateUrl: './outlet-form.component.html',
  styleUrls: ['./outlet-form.component.css']
})
export class OutletFormComponent implements OnInit {
  outlet = {};
  id;
//  address={};

address: Address = new Address();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outletService: OutletService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.outletService.get(this.id).take(1).subscribe(o => this.outlet = o);
   }

  save(outlet,address) {
    if (this.id) this.outletService.update(this.id, outlet);
    else this.outletService.create(this.outlet,this.address);

    this.address = new Address();

    this.router.navigate(['/admin/outlets']);
  }

  ngOnInit() {
  }

  // title: string = 'Google Maps Addeed Successfully';

  //    lat: number = 6.927079 ;

  //    lng: number = 79.861244;

  // google maps zoom level
  zoom: number = 11;

  lat: number =  6.927079;
  lng: number = 79.861244;

  draggable : boolean = true;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked(m: marker, $event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    console.log('place', m, $event);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }



  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
