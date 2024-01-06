import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  @Input() label: string = 'Button';
  @Input() color: string = '#000';
  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.btnClick.emit();
  }
}
