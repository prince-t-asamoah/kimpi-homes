import { Component, inject } from '@angular/core';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-log-out-dialog',
  imports: [],
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss',
})
export class LogOutDialogComponent {
  uiService = inject(UiService);

  closeLogoutDialog(): void {
    this.uiService.toggleLogoutDialog();
  }
}
