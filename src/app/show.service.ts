import { Injectable } from '@angular/core';
import { Show } from './show.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ShowService {
  shows: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.shows = angularFire.database.list('shows')
  }

  getShows() {
    return this.shows
  }

  getShowById(showId: string){
    return this.angularFire.database.object('/shows/' + showId)
  }

  addShow(newShow: Show) {
    this.shows.push(newShow)
  }

}
