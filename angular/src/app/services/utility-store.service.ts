import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityStoreService {

  offersDe = ['spanisch', 'kochen', 'programmieren', 'tanzen', 'klettern'];
  offersEn = ['spanish', 'cooking', 'programmieren', 'tanzen', 'klettern'];
  activitiesDe = ['kochen', 'turnen', 'schwimmen', 'rudern'];
  activitiesEn = ['COOKING', 'turnen', 'schwimmen', 'rudern'];
  citiesDe = ['Hamburg', 'Berlin', 'München', 'Hannover'];
  citiesEn = ['Hamburg', 'Berlin', 'Munich', 'Hannover'];
  sexDe = ['weiblich', 'männlich', 'egal'];
  sexEn = ['female', 'male', 'both'];


  constructor() { }

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
