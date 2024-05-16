import { Injectable } from "@angular/core";
import { Member } from "../models/member.model";
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
 addMemberToServer(member: Member): Observable<Member> {
  return this._http.post<Member>("/api/Members/", member);
}

//server
updateMemberToServer(id:number,member: Member): Observable<Member> { 
  const url = `/api/Members/${id}`;
  return this._http.put<Member>(url, member).pipe(
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
