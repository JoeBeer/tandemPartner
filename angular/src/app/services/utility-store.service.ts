import { Utilities } from './../models/utilities';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityStoreService {

  offersDe;
  offersEn;
  activitiesDe;
  activitiesEn;
  citiesDe;
  citiesEn;
  sexDe;
  sexEn;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
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

  getAllOffers(language: string) {
    if (language === 'de') {
      return this.offersDe;
    } else {
      return this.offersEn;
    }
  }

  getAllActivities(language: string) {
    if (language === 'de') {
      return this.activitiesDe;
    } else {
      return this.activitiesEn;
    }
  }

  getAllCities(language: string) {
    if (language === 'de') {
      return this.citiesDe;
    } else {
      return this.citiesEn;
    }
  }

  getAllSex(language: string) {
    if (language === 'de') {
      return this.sexDe;
    } else {
      return this.sexEn;
    }
  }
}
