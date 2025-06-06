import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-form-select',
  imports: [NgClass, LucideAngularModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss',
})
export class FormSelectComponent implements OnInit {
  @Input({ required: true }) id = '';
  @Input() label = 'No label';
  @Input() name = '';
  @Input() disabled = false;
  @Input() options: { value: string; label: string }[] = [];
  @Input() autocomplete!: string;
  @ViewChild('selectContainer') selectContainer!: ElementRef;
  showDropdown = false;
  selectedValue = '';
  selectedLabel = '';

  ngOnInit(): void {
    // Ensure selectedValue is set to the first option if options are provided
    if (this.options.length > 0 && !this.selectedValue) {
      this.selectedValue = this.options[0].value;
      this.selectedLabel = this.options[0].label;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.selectContainer?.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: { value: string; label: string }): void {
    if (this.selectedValue === option.value) return;
    this.selectedValue = option.value;
    this.selectedLabel = option.label;
    this.toggleDropdown();
  }
}
