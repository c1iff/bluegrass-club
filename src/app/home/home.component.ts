import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members: Member[] = [
    new Member('Test Member', 'Test Location', 'Test Instructions', 'Test img'),
    new Member('Test Member', 'Test Location', 'Test Instructions', 'Test img'),
    new Member('Test Member', 'Test Location', 'Test Instructions', 'Test img'),
    new Member('Test Member', 'Test Location', 'Test Instructions', 'Test img')
  ]

  constructor() { }

  ngOnInit() {

  }

}
