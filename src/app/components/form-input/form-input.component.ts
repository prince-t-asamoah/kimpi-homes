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
    | 'textarea'
    | 'hidden' = 'text';
  @Input({ required: true }) id = '';
  @Input({ required: true }) label = '';
  @Input() placeholder = '';
  @Input() name = '';
  @Input() autocomplete!: string;
  @Input() error = '';
  value = '';
  touched = false;
  disabled = false;

  // Methods required by ControlValueAccessor interface
  onChange: (value: string) => void = () => {
    /* Handle value changes */
  };

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

  private _markAsTouched() {
    if (!this.touched) {
      this.touched = true;
    }
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  onBlur(): void {
    this._markAsTouched();
    this.onTouched();
  }
}
