import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]
})
export class NewMemberComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, location: string, introduction: string, img: string){
    var newMember: Member = new Member(name, location, introduction, img)
    this.memberService.addMember(newMember)
  }


}
