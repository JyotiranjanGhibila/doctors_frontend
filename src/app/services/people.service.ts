import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(`${this.apiUrl}/persons`);
  }

  getPerson(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/person/${id}`);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/person/add`, person);
  }

  updatePerson(id: string, person: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/person/update/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/person/delete/${id}`);
  }
}
