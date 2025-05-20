import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-products-pagination-buttons',
  imports: [LucideAngularModule, RouterLinkActive, RouterLink],
  templateUrl: './products-pagination-buttons.component.html',
  styleUrl: './products-pagination-buttons.component.scss',
})
export class ProductsPaginationButtonsComponent {
  @Input({ required: true }) currentPageNumber = 1;
  @Input({ required: true }) totalPages = 10;
  @Input({ required: true }) currentPageRoute = '';

  pageCounter(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
