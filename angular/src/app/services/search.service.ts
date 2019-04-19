import { MatchStoreService } from './match-store.service';
import { Searchrequest } from './../models/searchrequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { IdResponse } from '../models/idResponse';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
  // private apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';
  private headers: Headers = new Headers();

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    private matchStoreService: MatchStoreService
  ) {
    this.headers.append('Content-Type', 'application/json');
  }

  createSearchrequest(searchdata: any) {
    return this.http.post<IdResponse>(`${this.apiUrl}/searches/`, searchdata);
  }

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

  getSearchRequestById(searchRequestId) {
    return this.angularFirestore
      .collection<any>('users')
      .doc<User>(this.authService.currentUserID)
      .collection('searches')
      .doc<Searchrequest>(searchRequestId).valueChanges();
  }

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

  searchQueryWithCityButWithoutSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('city', '==', searchRequest.cityParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
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
            })
          );
      })
    );
  }

  searchQueryWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
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
            })
          );
      })
    );
  }

  searchQueryWithCityAndSex(searchRequest: Searchrequest) {
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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
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
            })
          );
      })
    );
  }

  searchQueryWithoutCityButWithSex(searchRequest: Searchrequest) {
    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('sex', '==', searchRequest.sexParam))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
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
            })
          );
      })
    );
  }

  searchQueryWithCityAndSexAndMinAndMax(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;
    const maxAge = searchRequest.maxAgeParam + 1; // TODO Why does this shows the right results?

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        const usersResult: any[] = [];

        minUsers.forEach(minUser => {
          maxUsers.forEach(maxUser => {
            if (minUser.uid === maxUser.uid) {
              usersResult.push(minUser);
            }
          });
        });

        return usersResult;
      }));
  }

  searchQueryWithCityAndMinAndMaxButWithoutSex(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        const usersResult: any[] = [];

        minUsers.forEach(minUser => {
          maxUsers.forEach(maxUser => {
            if (minUser.uid === maxUser.uid) {
              usersResult.push(minUser);
            }
          });
        });

        return usersResult;
      }));
  }

  searchQueryWithSexAndMinAndMaxButWithoutCity(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        const usersResult: any[] = [];

        minUsers.forEach(minUser => {
          maxUsers.forEach(maxUser => {
            if (minUser.uid === maxUser.uid) {
              usersResult.push(minUser);
            }
          });
        });

        return usersResult;
      }));
  }

  searchQueryWithMinAndMaxButWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

    const minAgeUsers = this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );

    return combineLatest(minAgeUsers, maxAgeUsers).pipe(
      map(([minUsers, maxUsers]) => {
        const usersResult: any[] = [];

        minUsers.forEach(minUser => {
          maxUsers.forEach(maxUser => {
            if (minUser.uid === maxUser.uid) {
              usersResult.push(minUser);
            }
          });
        });

        return usersResult;
      }));
  }

  searchQueryWithCityAndSexAndMinButWithoutMax(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithCityAndMinButWithoutMaxAndWithoutSex(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithSexAndMinButWithoutMaxAndWithoutCity(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithMinButWithoutMaxAndWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    const minAge = searchRequest.minAgeParam;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '<=', minAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithCityAndSexAndMaxButWithoutMin(searchRequest: Searchrequest) {
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithCityAndMaxButWithoutMinAndWithoutSex(searchRequest: Searchrequest) {
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithSexAndMaxButWithoutMinAndWithoutCity(searchRequest: Searchrequest) {
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

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
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  searchQueryWithMaxButWithoutMinAndWithoutCityAndWithoutSex(searchRequest: Searchrequest) {
    const maxAge = searchRequest.maxAgeParam + 1;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDay();

    const maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));

    return this.getUsersToBeExcludedArray().pipe(
      switchMap(userArray => {
        const uniqueUsers = Array.from(new Set(userArray));
        return this.angularFirestore
          .collection<any>('users', ref => ref.where('offers', 'array-contains', searchRequest.offerParam)
            .where('dateOfBirth', '>=', maxAgeDate))
          .snapshotChanges()
          .pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as User;
                return { ...data };
              });
            }),
            map(users => {
              let commonActivities: number[] = [];
              const currentUserActivities = this.authService.currentUserActivities;
              const filteredUsers: any[] = []; users.map(user => {
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
            })
          );
      })
    );
  }

  getUsersToBeExcludedArray() {
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

}
