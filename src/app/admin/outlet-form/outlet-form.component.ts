import { ActivatedRoute, Router } from '@angular/router';
import { OutletService } from '../../outlet.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

import { Address } from '../../models/address';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BrowserModule } from '@angular/platform-browser';
import { MouseEvent } from '@agm/core';

import { UUID } from 'angular2-uuid';

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

uuid: string = UUID.UUID();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outletService: OutletService) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ngOnInit
    if (this.id) this.outletService.get(this.id).take(1).subscribe(o => this.outlet = o);
   }

  save(outlet,address, uuid) {
    if (this.id) this.outletService.update(this.id, outlet);
    else this.outletService.create(this.outlet,this.address, this.uuid);



    this.address = new Address();

    this.router.navigate(['/admin/outlets']);
  }

  ngOnInit() {
  }

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
                              //GOOGLE MAP//




  // title: string = 'Google Maps Addeed Successfully';

  //    lat: number = 6.927079 ;

  //    lng: number = 79.861244;

  // google maps zoom level
  zoom: number = 12;

  lat: number =  6.927079;
  lng: number = 79.861244;

  draggable : boolean = true;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked(m: marker, $event: MouseEvent) {
    this.markers.length = 0;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    console.log('place', m, $event);

  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    this.markers.length = 0;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
    console.log('dragEnd', m, $event);
  }



  markers: marker[] = [
	  // {
		//   lat: 6.886867772472544,
		//   lng: 79.88675504922867,
		//   label: 'Sen Su',
		//   draggable: true
	  // }

  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
