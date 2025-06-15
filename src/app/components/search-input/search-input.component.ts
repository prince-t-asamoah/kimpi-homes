import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-search-input',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  value = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Output() focusEvent = new EventEmitter<FocusEvent>();
  @Output() inputEvent = new EventEmitter<Event>();
  @Output() blurEvent = new EventEmitter<Event>();
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  clearSearchInput(): void {
    this.value = '';
    this.searchInput.nativeElement.value = '';
    this.searchInput.nativeElement.dispatchEvent(
      new Event('input', { bubbles: true })
    );
    this.searchInput.nativeElement.focus();
  }

  inputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.inputEvent.emit(event);
  }
}
