import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { Router } from '@angular/router';
import { ShowService } from '../show.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  providers: [ShowService]
})
export class ShowsComponent implements OnInit {
  shows: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  locationToFilter: string = "all";

  constructor(private router: Router, private showService: ShowService) { }

  ngOnInit() {
    this.shows = this.showService.getShows();
  }

  goToDetailPage(clickedShow) {
    this.router.navigate(['shows', clickedShow.$key]);
  }

  onChange(optionFromMenu) {
    this.locationToFilter = optionFromMenu;
  }
}
