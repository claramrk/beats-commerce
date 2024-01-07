import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beat } from '../beat';
import { BeatService } from '../services/beat.service';

@Component({
  selector: 'app-beats-items',
  standalone: true,
  imports: [],
  templateUrl: './beats-items.component.html',
  styleUrl: './beats-items.component.css',
})
export class BeatsItemsComponent implements OnInit {
  beats: Beat[] = [];
  subscription!: Subscription;

  @Input() beat!: Beat;

  constructor(private http: HttpClient, private beatService: BeatService) {}
  ngOnInit() {
    this.beatService.getBeats().subscribe((elem: Beat[]) => {
      this.beats = elem;
    });
  }

  @Output() onDeleteBeat: EventEmitter<Beat> = new EventEmitter<Beat>();

  onDelete(beat: Beat) {
    this.onDeleteBeat.emit(beat);
  }
}
