import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beat } from '../beat';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BeatService {
  private apiBaseUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getBeats(): Observable<Beat[]> {
    return this.http.get<Beat[]>(this.apiBaseUrl);
  }
}
