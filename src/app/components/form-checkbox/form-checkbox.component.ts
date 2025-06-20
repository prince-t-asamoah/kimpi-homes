import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCheckboxComponent),
      multi: true,
    },
  ],
})
export class FormCheckboxComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() name = '';
  @Input() disabled = false;
  @Input() type: 'checkbox' | 'radio' = 'checkbox';
  @Input() error = '';
  @Input() ariaLabel = '';
  isChecked = false;
  touched = false;

  // Methods required by ControlValueAccessor interface
  onChange: (value: boolean) => void = () => {
    /* Handle value changes */
  };

  onTouched: () => void = () => {
    /* Mark as touched */
  };

  writeValue(value: boolean | null): void {
    this.isChecked = !!value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
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
    const target = event.target as HTMLInputElement;
    this.isChecked = target.checked;
    this.onChange(this.isChecked);
    this.onTouched();
  }

  onBlur(): void {
    this._markAsTouched();
    this.onTouched();
  }
}
