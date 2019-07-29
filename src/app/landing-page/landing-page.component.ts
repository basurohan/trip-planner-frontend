import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  trips: Trip[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.trips = data[0]);
  }

  createNewTrip() {
    this.router.navigate(['create-new']);
  }

}
