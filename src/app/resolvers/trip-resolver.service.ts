import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Trip } from '../trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripResolverService implements Resolve<Trip[]> {

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.http
      .get<Trip[]>('http://localhost:3000/trip-summary')
      .pipe(
        map((data: Trip[]): Trip[] => {
          return data;
        })
      );
  }
}
