import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { Vaccination } from '../../models/vaccination.model';
import { Router } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { VaccinationService } from '../../services/vaccination.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { VaccineProducer } from '../../enums/vaccine-producer.enum';
@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  existingUserMessage: string | undefined;
  successMessage: string | undefined;
  id: number | undefined;
  addVaccinationFormVisible: boolean = false;
  newVaccination: Vaccination = { id: 0, producer: '', date: moment(), memberId: 0 };
  @Input()
  member: Member | undefined;
  showVaccinationDetails: boolean = false;
  editedVaccination: Vaccination | undefined;
  vaccineProducers = Object.values(VaccineProducer);
  constructor(private memberService: MemberService, private vaccinationService: VaccinationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  //חיסונים-הצגה, עריכה, הוספה ומחיקה

  toggleVaccinationDetails() {
    this.showVaccinationDetails = !this.showVaccinationDetails;

  }

  editVaccination(vaccination: Vaccination) {
    this.editedVaccination = { ...vaccination };
    // עותק של החיסון לעריכה
  }

  updateVaccination() {
    if (this.editedVaccination) {
      this.vaccinationService.updateVaccinationToServer(this.editedVaccination)
        .subscribe(updatedVaccination => {
          // עדכון החיסון המעודכן ברשימה
          if (this.member && this.member.vaccinations) {
            const index = this.member!.vaccinations.findIndex(v => v.id === updatedVaccination.id);
            if (index !== -1) {
              this.member!.vaccinations[index] = updatedVaccination;
            }
          }
          // איפוס עריכת החיסון והודעה על הצלחה
          this.editedVaccination = undefined;
          this.successMessage = 'Vaccination successfully updated';
          setTimeout(() => {
            this.successMessage = '';
          }, 2000);
        },
          error => {
            console.error('Error updating vaccination:', error);
          }
        );
    };
  }

  deleteVaccination(id: number) {
    this.vaccinationService.deleteVaccinationFromServer(id).subscribe(() => {
      if (this.member && this.member.vaccinations) {
        this.member.vaccinations = this.member?.vaccinations!.filter(member => member.id !== id);
        console.log('Member deleted successfully');
        this.existingUserMessage = 'The member has been successfully deleted';
        setTimeout(() => {
          this.existingUserMessage = '';
        }, 2000);
      }
    }, error => {
      console.error('Error deleting member:', error);
    });
  }

  addVaccination(): void {
    //לקיחת המזהה של החבר שלו רוצים להוסיף חיסון
    if (this.member && typeof this.member.id === 'number') {
      this.newVaccination.memberId = this.member.id;
    }
    this.vaccinationService.addVaccinationToServer(this.newVaccination).subscribe(response => {
      this.successMessage = 'Vaccination successfully added';
      setTimeout(() => {
        this.successMessage = '';
      }, 2000);

      if (this.member && this.member.vaccinations) {
        this.member.vaccinations.push(response);
      }
      this.addVaccinationFormVisible = false;
      this.clearForm();
    });
  }

  canAdd(): boolean {
    //במידה ויש לו כבר 4 חיסונים
    if (this.member && this.member.vaccinations && this.member!.vaccinations.length >= 4)
      return false;
    else
      return true;
  }

  clearForm(): void {
    this.newVaccination = {
      id: 0, producer: '', date: moment(), memberId: 0
    };
  }

}


