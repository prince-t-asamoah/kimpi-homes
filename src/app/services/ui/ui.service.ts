import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isFilterSidebarOpen = signal(false);
  isLogoutDialogOpen = signal(false);

  toggleFilterSidebar(): void {
    this.isFilterSidebarOpen.update(prev => !prev);
  }

  toggleLogoutDialog(): void {
    this.isLogoutDialogOpen.update(prev => !prev);
  }
}
