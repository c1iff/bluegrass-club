import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model'
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  showNewShowForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNewShowForm() {
    this.showNewShowForm = true;
  }

}
