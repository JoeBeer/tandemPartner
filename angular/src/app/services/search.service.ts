import { MatchStoreService } from './match-store.service';
import { Searchrequest } from './../models/searchrequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { IdResponse } from '../models/idResponse';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
  private apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';
  private headers: Headers = new Headers();

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private matchStoreService: MatchStoreService
  ) {
    this.headers.append('Content-Type', 'application/json');
  }

  // create new search request with the given searchdata
  createSearchrequest(searchdata: any) {
    return this.http.post<IdResponse>(`${this.apiUrl}/searches/`, searchdata);
  }

  // get recent search requests of the current user
  getRecentSearchRequests() {
    return this.angularFirestore
      .collection(`users/${this.authService.currentUserID}/searches`, ref => ref.orderBy('createdAt', 'desc'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  // get search request by the given searchRequestId
  getSearchRequestById(searchRequestId) {
    return this.angularFirestore
      .collection<any>('users')
      .doc<User>(this.authService.currentUserID)
      .collection('searches')
      .doc<Searchrequest>(searchRequestId).valueChanges();
  }

  // get search result with users that are matching the search criterias
  getSearchResult(searchRequest: Searchrequest) {
    if (searchRequest.minAgeParam === 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam >= 0 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithCityAndSexAndMaxButWithoutMin(searchRequest);
    }
    if (searchRequest.minAgeParam === 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam >= 0 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithCityAndMaxButWithoutMinAndWithoutSex(searchRequest);
    }
    if (searchRequest.minAgeParam === 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam === -1 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithSexAndMaxButWithoutMinAndWithoutCity(searchRequest);
    }
    if (searchRequest.minAgeParam === 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam === -1 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithMaxButWithoutMinAndWithoutCityAndWithoutSex(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam === 0 &&
      searchRequest.cityParam >= 0 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithCityAndSexAndMinButWithoutMax(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam === 0 &&
      searchRequest.cityParam >= 0 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithCityAndMinButWithoutMaxAndWithoutSex(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam === 0 &&
      searchRequest.cityParam === -1 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithSexAndMinButWithoutMaxAndWithoutCity(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam === 0 &&
      searchRequest.cityParam === -1 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithMinButWithoutMaxAndWithoutCityAndWithoutSex(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam >= 0 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithCityAndSexAndMinAndMax(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam >= 0 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithCityAndMinAndMaxButWithoutSex(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam === -1 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithSexAndMinAndMaxButWithoutCity(searchRequest);
    }
    if (searchRequest.minAgeParam !== 0 &&
      searchRequest.maxAgeParam !== 0 &&
      searchRequest.cityParam === -1 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithMinAndMaxButWithoutCityAndWithoutSex(searchRequest);
    }
    if (searchRequest.cityParam === -1 &&
      searchRequest.sexParam === 2) {
      return this.searchQueryWithoutCityAndWithoutSex(searchRequest);
    }
    if (searchRequest.cityParam >= 0 &&
      searchRequest.sexParam < 2) {
      return this.searchQueryWithCityAndSex(searchRequest);
    }
    if (searchRequest.cityParam === -1) {
      return this.searchQueryWithoutCityButWithSex(searchRequest);
    }
    if (searchRequest.cityParam >= 0) {
      return this.searchQueryWithCityButWithoutSex(searchRequest);
    }
  }

  // search all users that match the search criterias offer and city
  private searchQueryWithCityButWithoutSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criteria offer
  private searchQueryWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, city and sex
  private searchQueryWithCityAndSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('sex', '==', searchRequest.sexParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer and sex
  private searchQueryWithoutCityButWithSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('sex', '==', searchRequest.sexParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, city, sex, minAge and maxAge
  private searchQueryWithCityAndSexAndMinAndMax(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    const minAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);;
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    const maxAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        return this.validateDuplicateUsers(minUsers, maxUsers);
      }));
  }

  // search all users that match the search criterias offer, city, minAge and maxAge
  private searchQueryWithCityAndMinAndMaxButWithoutSex(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    const minAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    const maxAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        return this.validateDuplicateUsers(minUsers, maxUsers);
      }));
  }

  // search all users that match the search criterias offer, sex, minAge and maxAge
  private searchQueryWithSexAndMinAndMaxButWithoutCity(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    const minAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    const maxAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        return this.validateDuplicateUsers(minUsers, maxUsers);
      }));
  }

  // search all users that match the search criterias offer, minAge and maxAge
  private searchQueryWithMinAndMaxButWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    const minAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    const maxAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        return this.validateDuplicateUsers(minUsers, maxUsers);
      }));
  }

  // search all users that match the search criterias offer, city, sex and minAge
  private searchQueryWithCityAndSexAndMinButWithoutMax(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);;
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, city and minAge
  private searchQueryWithCityAndMinButWithoutMaxAndWithoutSex(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, sex and minAge
  private searchQueryWithSexAndMinButWithoutMaxAndWithoutCity(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer and minAge
  private searchQueryWithMinButWithoutMaxAndWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    const minAgeDate = this.parseMinAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, city, sex and maxAge
  private searchQueryWithCityAndSexAndMaxButWithoutMin(searchRequest: Searchrequest) {
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, city and maxAge
  private searchQueryWithCityAndMaxButWithoutMinAndWithoutSex(searchRequest: Searchrequest) {
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer, sex and maxAge
  private searchQueryWithSexAndMaxButWithoutMinAndWithoutCity(searchRequest: Searchrequest) {
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('sex', '==', searchRequest.sexParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // search all users that match the search criterias offer and maxAge
  private searchQueryWithMaxButWithoutMinAndWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    const maxAgeDate = this.parseMaxAgeToDate(searchRequest);

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return this.parseDocumentChangeActionToUsers(actions);
            }),
            map(users => {
              return this.parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers);
            })
          );
      })
    );
  }

  // get all users that have to be excluded from the search result
  private getUsersToBeExcludedArray() {
    return this.matchStoreService.getAllMatches().pipe(
      map(matches => {
        const userArray: string[] = [];
        userArray.push(this.authService.currentUserID);
        matches.map(match => {
          userArray.push(match.initiatorID);
          userArray.push(match.partnerID);
        });
        return userArray;
      })
    );
  }

  // map the DocumentChangeAction object to an array of User objects
  private parseDocumentChangeActionToUsers(actions: DocumentChangeAction<any>[]) {
    return actions.map(a => {
      const data = a.payload.doc.data() as User;
      return { ...data };
    });
  }

  // filter out users that machtes the search criterias,
  // create array of common activities with the current user and returns them as an array
  private parseUsersToSearchCriteriasMatchingUsers(users, uniqueUsers: string[]) {
    let commonActivities: number[] = [];
    const currentUserActivities = this.authService.currentUserActivities;
    const filteredUsers: any[] = [];
    users.map(user => {
      if (uniqueUsers.includes(user.uid) === false) {
        user.activities.forEach(activity => {
          currentUserActivities.forEach(currentUserActivity => {
            if (activity === currentUserActivity) {
              commonActivities.push(activity);
            }
          });
        });
        filteredUsers.push({ commonActivities, ...user });
        commonActivities = [];
      }
    });
    return filteredUsers;
  }

  // turn search criteria of minAge into the date in miliseconds
  private parseMinAgeToDate(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();
    return Number(new Date(todayYear - minAge, todayMonth, todayDay));
  }

  // turn search criteria of maxAge into the date in miliseconds
  private parseMaxAgeToDate(searchRequest: Searchrequest) {
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();
    return Number(new Date(todayYear - maxAge, todayMonth, todayDay));
  }

  // filters out only the unique users in the search results and returns them as an array
  private validateDuplicateUsers(minUsers, maxUsers) {
    const usersResult: any[] = [];

    minUsers.forEach(minUser => {
      maxUsers.forEach(maxUser => {
        if (minUser.uid === maxUser.uid) {
          usersResult.push(minUser);
        }
      });
    });
    return usersResult;
  }

}
