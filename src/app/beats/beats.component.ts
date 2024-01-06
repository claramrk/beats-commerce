import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beat } from '../beat';
import { BeatsItemsComponent } from '../beats-items/beats-items.component';
import { BeatService } from '../services/beat.service';

@Component({
  selector: 'app-beats',
  standalone: true,
  imports: [BeatsItemsComponent, NgFor],
  templateUrl: './beats.component.html',
  styleUrl: './beats.component.css',
})
export class BeatsComponent implements OnInit {
  beats: Beat[] = [];
  subscription!: Subscription;

  constructor(private http: HttpClient, private beatService: BeatService) {}
  ngOnInit() {
    this.beatService.getBeats().subscribe((elem: Beat[]) => {
      this.beats = elem;
    });
  }
}
