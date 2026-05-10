import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-variant',
  imports: [CommonModule],
  templateUrl: './button-variant.html',
})
export class ButtonVariant {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter<Event>();
}
