import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddBeat: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  toggleAddBeat(): void {
    this.showAddBeat = !this.showAddBeat;
    this.subject.next(this.showAddBeat);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
