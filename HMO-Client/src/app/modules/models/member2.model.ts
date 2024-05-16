import { Vaccination } from "./vaccination.model";
import * as moment from 'moment'; 
export class Member2 {

  
    identity:string | undefined
    name:string | undefined
    city :string | undefined
    street:string | undefined
    houseNumber:number | undefined
    dateOfBirth :moment.Moment | undefined
    phone:string | undefined
    mobilePhone :string | undefined
    vaccinations:Vaccination[] | undefined
    numOfVaccinations:number | undefined
    startOfIll: moment.Moment | undefined
    endOfIll: moment.Moment | undefined
    image: string | undefined;

    constructor(
       
        identity:string,
        name:string,
        city :string,
        street:string,
        houseNumber:number,
        dateOfBirth :moment.Moment,
        phone:string,
        mobilePhone :string,
        vaccinations:Vaccination[] ,
        numOfVaccinations:number,
        startOfIll: moment.Moment,
        endOfIll: moment.Moment,
        image: string
    )
    {
   
    this.identity=identity
    this.name=name
    this.city=city
    this.street=street
    this.houseNumber=houseNumber
    this.dateOfBirth=dateOfBirth
    this.phone=phone
    this.mobilePhone=mobilePhone
    this.vaccinations=vaccinations
    this.numOfVaccinations=numOfVaccinations
    this.startOfIll=startOfIll
    this.endOfIll=endOfIll
    this.image=image
    }


}