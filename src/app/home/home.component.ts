import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  locations: string[];
  currentRoute: string = this.router.url;
  locationToFilter: string = "all";

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();

    this.members.subscribe(result => {
      var getLocationArray = [];
      result.forEach(function(each){
        getLocationArray.push(each.location);
      })
      this.locations = getLocationArray.filter(function(elem, pos, arr) {
        return arr.indexOf(elem) == pos;
      })
    });

  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

  onChange(optionFromMenu) {
    this.locationToFilter = optionFromMenu;
  }
}
