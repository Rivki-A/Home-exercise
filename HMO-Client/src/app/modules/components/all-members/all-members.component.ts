
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {
  members: Member[] = [];
  existingUserMessage: string | undefined;
  constructor(private _memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this._memberService.getMemberFromServer().subscribe(data => {
      this.members = data;
      console.log(this.members);
    });
  }


  addMemberToList() {
    this.router.navigate(['/addMember']);
  }

  editMemberToList(member: Member) {
    this.router.navigate(['/editMember'], { state: { member } });
  }
  

  deleteMember(id: number) {
    this._memberService.deleteMemberFromServer(id).subscribe(() => {
      this.members = this.members.filter(member => member.id !== id);
      console.log('Member deleted successfully');
      this.existingUserMessage = 'The member has been successfully deleted';  
      setTimeout(() => {
        this.existingUserMessage = '';
      }, 2000);
    }, error => {
      console.error('Error deleting member:', error);
    });
  }
 
  
}

