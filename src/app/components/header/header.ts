import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonVariant } from '../button-variant/button-variant';

type User = {
  name: string;
};

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonVariant],
  templateUrl: './header.html',
})
export class Header {
  @Input() user: User | null = null;

  @Output() onLogin = new EventEmitter<Event>();
  @Output() onLogout = new EventEmitter<Event>();
  @Output() onCreateAccount = new EventEmitter<Event>();
}
