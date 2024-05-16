import * as moment from 'moment'; 


export class Vaccination2 {
    producer:string | undefined
    date :moment.Moment | undefined
    memberId :number | undefined

   constructor(
     producer:string,
     date :moment.Moment,
     memberId :number
   )
   {
    this.producer=producer
    this.date=date
    this.memberId=memberId
   }
}