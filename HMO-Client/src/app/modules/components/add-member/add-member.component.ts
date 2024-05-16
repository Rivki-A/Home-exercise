import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../../models/member.model';
import { Member2 } from '../../models/member2.model';
import { MemberService } from '../../services/member.service';
import * as moment from 'moment';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  successMessage: string | undefined;
  member: Member2 = {
    identity: '',
    name: '',
    city: '',
    street: '',
    houseNumber: 0,
    dateOfBirth: moment(),
    phone: '',
    mobilePhone: '',
    vaccinations:[] ,
    numOfVaccinations:0,
    startOfIll: moment(),
    endOfIll: moment(),
    image:''
  };

  constructor(private membersService: MemberService,private router: Router) { }

  ngOnInit(): void {
  }

  addMember(): void {
    if (!this.idInvalid && !this.phoneInvalid && !this.mobilePhoneInvalid) {
    this.membersService.addMemberToServer(this.member).subscribe(response => {
      console.log('New member added:', response);
      this.successMessage = 'Member successfully added';
      this.clearForm();
      setTimeout(() => {
        this.router.navigate(['/allMember']);
      }, 2000);
    });}
  }

  clearForm(): void {
    this.member = {
      identity: '',
      name: '',
      city: '',
      street: '',
      houseNumber: 0,
      dateOfBirth: moment(),
      phone: '',
      mobilePhone: '',
      vaccinations:[] ,
      numOfVaccinations:0,
      startOfIll: moment(),
      endOfIll: moment(),
      image:''
    };
   
  }


//בדיקות תקינות לקלטים:

idInvalid: boolean = false;
validateId(): void {
  // בדיקת אורך תעודת הזהות - חייבת להיות בדיוק 9 תווים ולהכיל רק מספרים
  if (this.member.identity && /^[0-9]{9}$/.test(this.member.identity)) {
    this.idInvalid = false;
  } else {
    this.idInvalid = true;
  }
}

phoneInvalid: boolean = false;
validatePhone(): void {
  // בדיקת אורך מספר הטלפון - חייב להיות 9 או 10 ספרות בלבד
  if (this.member.phone && !/^\d{9,10}$/.test(this.member.phone)) {
    this.phoneInvalid = true;
  } else {
    this.phoneInvalid = false;
  }
}

mobilePhoneInvalid: boolean = false;
validateMobilePhone(): void {
  // בדיקת אורך מספר הטלפון הנייד - חייב להיות בדיוק 10 ספרות בלבד
  if (this.member.mobilePhone && !/^\d{10}$/.test(this.member.mobilePhone)) {
    this.mobilePhoneInvalid = true;
  } else {
    this.mobilePhoneInvalid = false;
  }
}


}
