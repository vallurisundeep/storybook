import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule],
  templateUrl: './image-card.html',
  styleUrl: './image-card.scss',
})
export class ImageCard {
  @Input() imageUrl: string = 'https://placehold.co/600x400';
  @Input() imageAlt: string = 'Placeholder image';
  @Input() title: string = 'Card Title';
  @Input() description: string = 'This is a description of the card. It contains some text.';
  @Input() badgeText?: string;
  @Input() variant: 'default' | 'compact' | 'horizontal' = 'default';
  @Input() theme: 'light' | 'dark' | 'brand' = 'light';
}
