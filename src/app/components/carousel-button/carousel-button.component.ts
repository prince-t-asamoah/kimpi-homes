import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-carousel-button',
  imports: [LucideAngularModule],
  templateUrl: './carousel-button.component.html',
  styleUrl: './carousel-button.component.scss',
})
export class CarouselButtonComponent {
  @Input() arrowDirection: 'left' | 'right' = 'left';
  @Output() clickEvent = new EventEmitter<void>();
}
