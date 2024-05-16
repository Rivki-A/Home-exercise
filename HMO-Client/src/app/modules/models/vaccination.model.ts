import * as moment from 'moment'; 


export class Vaccination {
    id:number | undefined
    producer:string | undefined
    date :moment.Moment | undefined
    memberId :number | undefined
   constructor(
     id:number,
     producer:string,
     date :moment.Moment,
     memberId :number
   )
   {
    this.id=id
    this.producer=producer
    this.date=date
    this.memberId=memberId
   }
}