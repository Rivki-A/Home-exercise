import { Injectable } from "@angular/core";
import { Vaccination } from "../models/vaccination.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class VaccinationService {

  constructor(private _http: HttpClient) {}

//server
 getVaccinationFromServer(): Observable<Vaccination[]> {
    return this._http.get<Vaccination[]>("api/Vaccination");
  }

//server
 addVaccinationToServer(vaccination: Vaccination): Observable<Vaccination> {
  return this._http.post<Vaccination>("/api/Vaccination/", vaccination);
}

//server
updateVaccinationToServer(vaccination: Vaccination): Observable<Vaccination> {
  const url = `/api/Vaccination/${vaccination.id}`;
  return this._http.put<Vaccination>(url, vaccination).pipe(
    tap(updatedVaccination => console.log('Vaccination updated successfully:', updatedVaccination))
  );
}

//server
deleteVaccinationFromServer(id : Number): Observable<boolean> {
    return this._http.delete<boolean>("/api/Vaccination/" + id)
  }

}