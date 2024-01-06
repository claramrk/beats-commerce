import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Beat } from '../beat';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-add-beat',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-beat.component.html',
  styleUrl: './add-beat.component.css',
})
export class AddBeatComponent implements OnInit {
  showAddBeat: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddBeat = value;
    });
  }

  ngOnInit(): void {}

  showAddForm: boolean = false;
  title!: string;
  day!: string;
  coverImage!: string;
  price!: number;

  @Output() onAddBeat: EventEmitter<Beat> = new EventEmitter<Beat>();

  onSubmit() {
    if (!this.title) {
      alert('Please add a beat');
      return;
    }

    const newBeat: Beat = {
      id: 100, // Set the ID accordingly
      title: this.title,
      file: this.day,
      cover: this.coverImage,
      price: this.price,
    };

    this.onAddBeat.emit(newBeat);
  }
}
