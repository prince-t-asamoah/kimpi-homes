import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-form-input',
  imports: [LucideAngularModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input({ required: true }) type:
    | 'text'
    | 'password'
    | 'telephone'
    | 'email'
    | 'textarea' = 'text';
  @Input({ required: true }) id = '';
  @Input({ required: true }) label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() name = '';
}
