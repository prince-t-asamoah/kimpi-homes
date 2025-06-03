import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-checkbox',
  imports: [],
  templateUrl: './form-checkbox.component.html',
  styleUrl: './form-checkbox.component.scss',
})
export class FormCheckboxComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() value = '';
  @Input() disabled = false;
  @Input() checked = false;
  @Input() type: 'checkbox' | 'radio' = 'checkbox';
}
