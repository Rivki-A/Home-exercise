
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
@Component({
  selector: 'edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent  implements OnInit {
  successMessage: string | undefined;
  member!: Member;
  constructor(private route: ActivatedRoute, private memberService: MemberService,private router: Router) { }

  ngOnInit(): void {
    //פרטי החבר הנוכחי המועברים מקומפוננטת allMembers
    this.member = history.state.member; 
  }

  saveChanges() {
    const member2: any = {
      identity: this.member.identity,
      name: this.member.name,
      city: this.member.city,
      street: this.member.street,
      houseNumber: this.member.houseNumber,
      dateOfBirth: this.member.dateOfBirth,
      phone: this.member.phone,
      mobilePhone: this.member.mobilePhone,
      vaccinations: this.member.vaccinations,
      numOfVaccinations: this.member.numOfVaccinations,
      startOfIll: this.member.startOfIll,
      endOfIll: this.member.endOfIll,
      image: this.member.image
    };
   if(!this.idInvalid && !this.phoneInvalid && !this.mobilePhoneInvalid && this.member&&this.member.id !== undefined)
   { this.memberService.updateMemberToServer(+this.member.id,member2).subscribe(
      updatedMember => {
           console.log('Member updated successfully:', updatedMember);
           this.successMessage = 'The member has been successfully updated';
           setTimeout(() => {
            this.router.navigate(['/allMember']);
          }, 2000);
      },
      error => {
       
        console.error('Error updating course:', error);
      }
    );
   }
 }

  //בדיקות תקינות לקלטים:

idInvalid: boolean = false;
validateId(): void {
  // בדיקת אורך תעודת הזהות - חייבת להיות בדיוק 9 תווים ולהכיל רק מספרים
  if (this.member&&this.member.identity && /^[0-9]{9}$/.test(this.member.identity)) {
    this.idInvalid = false;
  } else {
    this.idInvalid = true;
  }
}

phoneInvalid: boolean = false;
validatePhone(): void {
  // בדיקת אורך מספר הטלפון - חייב להיות 9 או 10 ספרות בלבד
  if (this.member&&this.member.phone && !/^\d{9,10}$/.test(this.member.phone)) {
    this.phoneInvalid = true;
  } else {
    this.phoneInvalid = false;
  }
}

mobilePhoneInvalid: boolean = false;
validateMobilePhone(): void {
  // בדיקת אורך מספר הטלפון הנייד - חייב להיות בדיוק 10 ספרות בלבד
  if (this.member&&this.member.mobilePhone && !/^\d{10}$/.test(this.member.mobilePhone)) {
    this.mobilePhoneInvalid = true;
  } else {
    this.mobilePhoneInvalid = false;
  }
}
}



