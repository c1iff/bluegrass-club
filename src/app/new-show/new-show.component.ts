import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Show } from '../show.model';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css'],
  providers: [ShowService]
})
export class NewShowComponent implements OnInit {
  @Output() showAddedEvent = new EventEmitter();

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

  submitForm (artistName: string, date: string, doorTime: string, showTime: string, city: string, state: string, venue: string, description: string, overTwentyOne: boolean, img: string){
    var location = city + ' ,' + state
    var newShow: Show = new Show(artistName, date, doorTime, showTime, location, venue, description, overTwentyOne, img)
    this.showService.addShow(newShow)
    this.showAddedEvent.emit()
  }


}
