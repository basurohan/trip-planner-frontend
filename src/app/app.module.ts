import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TripDetailComponent,
    CreateTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
