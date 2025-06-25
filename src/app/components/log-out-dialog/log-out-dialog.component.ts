import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui/ui.service';
import { AuthService } from '../../features/auth/services/auth.service';
import { ToastNotificationService } from '../toast/service/toast-notification.service';

@Component({
  selector: 'app-log-out-dialog',
  imports: [],
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss',
})
export class LogOutDialogComponent implements OnDestroy {
  private readonly _subscriptions = new Subscription();
  isLoggingOut = false;

  constructor(
    private readonly _authService: AuthService,
    private readonly _uiService: UiService,
    private readonly _router: Router,
    private readonly _toastService: ToastNotificationService
  ) {}

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  closeLogoutDialog(): void {
    this._uiService.toggleLogoutDialog();
  }

  logout(): void {
    this.isLoggingOut = true;
    const logOut = this._authService.logout().subscribe({
      next: response => {
        this.isLoggingOut = false;
        if (response.error) {
          this._toastService.show(
            'Logout failed',
            'An error occured when logging out, please try again.',
            'error'
          );
          console.error('Logout error:', response.error);
        } else {
          this.closeLogoutDialog();
          this._authService.setAuthData({ isAuthenticated: false, user: null });
          this._router.navigate(['/']);
        }
      },
      error: error => {
        this._toastService.show(
          'Logout failed',
          'An error occured when logging out, please try again.',
          'error'
        );
        this.isLoggingOut = false;
        console.error('Error during logout:', error);
      },
    });
    this._subscriptions.add(logOut);
  }
}
