import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AuthFormValidators {
  static passwordMismatch(control: AbstractControl): ValidationErrors | null {
    if (!control.parent || !control.parent.get('password')) {
      return null; // Return null if the control has no parent and no password control
    }
    const password = control.parent.get('password')?.value;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
