
import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MemberService } from '../../services/member.service';
import * as moment from 'moment';
import { Chart, registerables } from 'chart.js/auto'; 

@Component({
  selector: 'app-active-members',
  templateUrl: './active-members.component.html', 
  styleUrls: ['./active-members.component.css']
})
export class ActiveMembersComponent implements OnInit {

  activePatientsData: number[] = []; // מערך שבו יאוחסנו נתוני מספר החולים הפעילים
  dates: string[] = []; // מערך שבו יאוחסנו תאריכי הימים בחודש האחרון
  unvaccinatedMembers: Member[] = []; //מערך עבור החברים שאינם מחוסנים

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {

    this.memberService.getMemberFromServer().subscribe((members: Member[]) => {
      const daysInMonth = moment().daysInMonth();
      const activePatientsByDate: number[] = new Array(daysInMonth).fill(0);

      for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = moment().date(day).startOf('day');
        members.forEach(member => {
          const startOfIll = moment(member.startOfIll);
          const endOfIll = moment(member.endOfIll);

          if (currentDate.isBetween(startOfIll, endOfIll, 'days', '[]')) {
            activePatientsByDate[day - 1]++;
          }
        });
        this.dates.push(String(day));
      }
      //בשביל למיין כמה חברי קופה אינם מחוסנים כלל
      this.findUnvaccinatedMembers(members); 

      this.createChart(this.dates, activePatientsByDate);
    });

  }

  createChart(labels: string[], data: number[]): void {
    const ctx = document.getElementById('activePatientsChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Active Patients',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  findUnvaccinatedMembers(members: Member[]): void {
      this.unvaccinatedMembers = members.filter(member =>  member.vaccinations && member.vaccinations.length === 0);
}
}

