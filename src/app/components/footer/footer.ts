import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class Footer {
  @Input() theme: 'light' | 'dark' | 'brand' = 'light';
  @Input() variant: 'default' | 'compact' | 'horizontal' = 'default';
}
