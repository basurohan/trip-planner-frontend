import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TripResolverService } from './resolvers/trip-resolver.service';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripDetailsResolverService } from './resolvers/trip-details-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent,
    resolve: [TripResolverService]
  },
  {
    path: 'detail/:id',
    component: TripDetailComponent,
    resolve: [TripDetailsResolverService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
