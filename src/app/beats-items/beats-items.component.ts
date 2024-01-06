import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() beat!: Beat; // Eingabe: Die aktuelle Aufgabe

  constructor(private http: HttpClient, private beatService: BeatService) {}
  ngOnInit() {
    this.beatService.getBeats().subscribe((elem: Beat[]) => {
      this.beats = elem;
    });
  }
}
