import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddButtonComponent } from '../add-button/add-button.component';
import { Beat } from '../beat';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-add-beat',
  standalone: true,
  imports: [FormsModule, NgIf, AddButtonComponent],
  templateUrl: './add-beat.component.html',
  styleUrl: './add-beat.component.css',
})
export class AddBeatComponent implements OnInit {
  showAddBeat: boolean = false;
  subscription: Subscription;
  showAddForm: boolean = false;
  title!: string;
  file!: string;
  coverImage!: string;
  price!: number;

  @Input() beatslength!: number;
  @Output() onAddBeat: EventEmitter<Beat> = new EventEmitter<Beat>();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddBeat = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('Please add a beat');
      return;
    }

    const newBeat: Beat = {
      id: this.beatslength + 1, // Set the ID accordingly
      title: this.title,
      file: this.file,
      cover: '/assets/trackCover.png',
      price: this.price,
    };

    this.onAddBeat.emit(newBeat);
  }
}
