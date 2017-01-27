import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Show } from '../show.model';
import { ShowService } from '../show.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css'],
  providers: [ShowService]
})
export class ShowDetailComponent implements OnInit {
  showId: string;
  showToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private showService: ShowService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.showId = urlParametersArray['id'];
    });
    this.showToDisplay = this.showService.getShowById(this.showId);
  }

}
