import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesOffersService {

  offers = ['spanisch', 'kochen'];
  activities = ['kochen', 'turnen', 'schwimmen', 'rudern'];

  constructor() { }

  getAllOffers() {
    return this.offers;
  }

  getAllActivities() {
    return this.activities;
  }
}
