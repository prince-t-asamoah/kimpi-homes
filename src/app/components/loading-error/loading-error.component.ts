import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loading-error',
  imports: [],
  templateUrl: './loading-error.component.html',
  styleUrl: './loading-error.component.scss',
})
export class LoadingErrorComponent {
  @Input() message =
    'An error occurred while loading data. Please try again later.';
  @Output() retry = new EventEmitter<void>();
}
