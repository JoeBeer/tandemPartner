import { Utilities } from './../models/utilities';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityStoreService {

  offersDe: string[];
  offersEn: string[];
  activitiesDe: string[];
  activitiesEn: string[];
  citiesDe: string[];
  citiesEn: string[];
  sexDe: string[];
  sexEn: string[];

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    // initalize the utilities document from the database
    this.angularFirestore.collection('utilities')
      .doc('utilitiesDoc')
      .get()
      .subscribe(doc => {
        const utilitiesDoc = doc.data() as Utilities;
        this.offersDe = utilitiesDoc.offersDe;
        this.offersEn = utilitiesDoc.offersEn;
        this.activitiesDe = utilitiesDoc.activitiesDe;
        this.activitiesEn = utilitiesDoc.activitiesEn;
        this.citiesDe = utilitiesDoc.citiesDe;
        this.citiesEn = utilitiesDoc.citiesEn;
        this.sexDe = utilitiesDoc.sexDe;
        this.sexEn = utilitiesDoc.sexEn;
      });
  }

  // get all offers depending on the language
  getAllOffers(language: string) {
    if (language === 'de') {
      return this.offersDe;
    } else {
      return this.offersEn;
    }
  }

  // get all activities depending on the language
  getAllActivities(language: string) {
    if (language === 'de') {
      return this.activitiesDe;
    } else {
      return this.activitiesEn;
    }
  }

  // get all cities depending on the language
  getAllCities(language: string) {
    if (language === 'de') {
      return this.citiesDe;
    } else {
      return this.citiesEn;
    }
  }

  // get all sex values depending on the language
  getAllSex(language: string) {
    if (language === 'de') {
      return this.sexDe;
    } else {
      return this.sexEn;
    }
  }
}
