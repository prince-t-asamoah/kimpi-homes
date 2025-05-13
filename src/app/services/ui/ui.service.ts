import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isFilterSidebarOpen = signal(false);

  toggleFilterSidebar(): void {
    this.isFilterSidebarOpen.update(prev => !prev);
  }
}
