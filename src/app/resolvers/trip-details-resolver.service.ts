import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Trip } from '../trip.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripDetailsResolverService implements Resolve<Trip> {

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    const id = route.queryParamMap.get('id');

    return this.http
      .get<Trip>(`http://localhost:3000/trip-details/${id}`)
      .pipe(
        map((data: Trip): Trip => {
          return data;
        })
      );
  }
}
