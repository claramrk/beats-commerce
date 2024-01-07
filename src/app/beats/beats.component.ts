import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddBeatComponent } from '../add-beat/add-beat.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { Beat } from '../beat';
import { BeatsItemsComponent } from '../beats-items/beats-items.component';
import { BeatService } from '../services/beat.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-beats',
  standalone: true,
  imports: [BeatsItemsComponent, NgFor, AddButtonComponent, AddBeatComponent],
  templateUrl: './beats.component.html',
  styleUrl: './beats.component.css',
})
export class BeatsComponent implements OnInit {
  beats: Beat[] = [];
  subscription!: Subscription;
  showAddBeat: boolean = false;

  ngOnInit() {
    this.beatService.getBeats().subscribe((elem: Beat[]) => {
      this.beats = elem;
    });
  }

  constructor(
    private beatService: BeatService,
    private uiService: UiService,
    private router: Router,
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddBeat = value));
  }

  addBeat(beat: Beat) {
    this.beatService

      .addBeat(beat)

      .subscribe((beat) => this.beats.push(beat));
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  toggleAddBeat() {
    this.uiService.toggleAddBeat();
  }

  deleteBeat(beat: Beat) {
    // Diese Methode wird aufgerufen, wenn eine Aufgabe gelöscht werden soll
    // Der beatService.deleteBeat() löscht die Aufgabe über eine HTTP-Anfrage
    // Nach dem erfolgreichen Löschen wird die beats-Array aktualisiert, um die gelöschte Aufgabe zu entfernen
    this.beatService
      .deleteBeat(beat.id)
      .subscribe(
        () => (this.beats = this.beats.filter((b) => b.id !== beat.id)),
      );
  }
}
