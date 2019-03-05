import { Match } from './../models/match';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MatchStoreService {

  unacceptedMatches: Match[];
  constructor() {
    this.unacceptedMatches = [
      new Match(
      'kycsoFi1RPaNy3hJxwmFhbD032I3',
      'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
      0),
      new Match(
      'a5WsJoGC2kbu0zto57mP',
      'xMFp4LlYHPXZ3ntVWvRsq0cwzl02',
      0)
    ];
   }

  getAllUnacceptedMatchesForUser(id: string) {
    return this.unacceptedMatches;
  }

  updateMatch(id: string, data: any) {
  // TOD: add functionality
  }
}
