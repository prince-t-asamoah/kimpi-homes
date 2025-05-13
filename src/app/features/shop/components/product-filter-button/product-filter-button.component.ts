import { UiService } from './../../../../services/ui/ui.service';
import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-product-filter-button',
  imports: [LucideAngularModule],
  templateUrl: './product-filter-button.component.html',
  styleUrl: './product-filter-button.component.scss',
})
export class ProductFilterButtonComponent {
  uiService = inject(UiService);
  isSidebarOpen = this.uiService.isFilterSidebarOpen;

  toggleFilter(): void {
    this.uiService.toggleFilterSidebar();
  }
}
