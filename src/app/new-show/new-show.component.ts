import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css'],
  providers: [ShowService]
})
export class NewShowComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

  submitForm (artistName: string, date: string, time: string, location: string, venue: string, description: string, overTwentyOne: boolean, img: string){
    var newShow: Show = new Show(artistName, date, time, location, venue, description, overTwentyOne, img)
    this.showService.addShow(newShow)
  }


}
