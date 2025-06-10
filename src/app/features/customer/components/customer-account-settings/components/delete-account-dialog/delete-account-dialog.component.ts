import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-account-dialog',
  imports: [],
  templateUrl: './delete-account-dialog.component.html',
  styleUrl: './delete-account-dialog.component.scss',
})
export class DeleteAccountDialogComponent {
  @Output() closeDialog = new EventEmitter<void>();
}
