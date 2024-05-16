import { Injectable } from "@angular/core";
import { Member } from "../models/member.model";
import { Member2 } from '../models/member2.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {

constructor(private _http: HttpClient) {}

//server
  getMemberFromServer(): Observable<Member[]> {
    return this._http.get<Member[]>("api/Members");
  }

//server
 addMemberToServer(member: Member2): Observable<Member> {
  return this._http.post<Member>("/api/Members/", member);
}

//server
updateMemberToServer(member: Member): Observable<Member> { 
  const url = `/api/Members/${member.id}`;
  const member2 = new Member2(
    member.identity || '', 
    member.name || '', 
    member.city || '', 
    member.street || '', 
    member.houseNumber || 0, 
    member.dateOfBirth || moment(), 
    member.phone || '', 
    member.mobilePhone || '',
    member.vaccinations || [], 
    member.numOfVaccinations || 0, 
    member.startOfIll || moment(), 
    member.endOfIll || moment() ,
    member.image|| ''
  );
  console.log(member2)
  return this._http.put<Member>(url, member2).pipe(
    tap(updatedMember => console.log('Member updated successfully:', updatedMember))
  );
}

//server
deleteMemberFromServer(id : Number): Observable<boolean> {
    return this._http.delete<boolean>("/api/Members/" + id)
  }

//server
  getMemberByIdFromServer(id: number): Observable<Member> {
    return this._http.get<Member>("/api/Members/" + id);
  }
}
