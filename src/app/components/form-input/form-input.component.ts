import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  @Input({ required: true }) type:
    | 'text'
    | 'password'
    | 'telephone'
    | 'email'
    | 'textarea' = 'text';
  @Input({ required: true }) id = '';
  @Input({ required: true }) label = '';
  @Input() placeholder = '';
  @Input() name = '';
  @Input() disabled = false;
  @Input() autocomplete!: string;

  value = '';
  onChange: (value: string) => void = () => {
    /* Handle value changes */
  };
  // Method required by ControlValueAccessor interface
  onTouched: () => void = () => {
    /* Mark as touched */
  };

  writeValue(value: string | null): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
