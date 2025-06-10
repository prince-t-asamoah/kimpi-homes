import { Component } from '@angular/core';
import { FormInputComponent } from '../../../components/form-input/form-input.component';
import { FormCheckboxComponent } from '../../../components/form-checkbox/form-checkbox.component';
import { DeleteAccountDialogComponent } from './components/delete-account-dialog/delete-account-dialog.component';

@Component({
  selector: 'app-customer-account-settings',
  imports: [
    FormInputComponent,
    FormCheckboxComponent,
    DeleteAccountDialogComponent,
  ],
  templateUrl: './customer-account-settings.component.html',
  styleUrls: [
    '../scss/customer-shared.scss',
    './customer-account-settings.component.scss',
  ],
})
export class CustomerAccountSettingsComponent {
  isDeleteAccountDialogOpen = false;

  toggleDeleteAccountDialog(): void {
    this.isDeleteAccountDialogOpen = !this.isDeleteAccountDialogOpen;
  }
}
