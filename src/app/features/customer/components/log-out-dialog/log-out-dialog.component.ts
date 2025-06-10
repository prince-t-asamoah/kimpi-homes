import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-log-out-dialog',
  imports: [],
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss',
})
export class LogOutDialogComponent {
  @Output() cancelDialog = new EventEmitter<void>();
}
