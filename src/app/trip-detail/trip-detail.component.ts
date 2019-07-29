import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  trip: Trip;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.trip = data[0]);
  }

}
