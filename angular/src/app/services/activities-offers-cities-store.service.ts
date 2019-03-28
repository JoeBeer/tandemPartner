import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesOffersCitiesStoreService {

  offers = ['spanisch', 'kochen', 'programmieren', 'tanzen', 'klettern'];
  activities = ['kochen', 'turnen', 'schwimmen', 'rudern'];
  cities = ['Hamburg', 'Berlin', 'München', 'Hannover'];

  constructor() { }

  getAllOffers() {
    return this.offers;
  }

  getAllActivities() {
    return this.activities;
  }

  getAllCities() {
    return this.cities;
  }
}
