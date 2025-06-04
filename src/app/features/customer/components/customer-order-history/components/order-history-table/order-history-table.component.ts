import { Component, HostListener, Input } from '@angular/core';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { CustomerOrder } from '../../../../model/customer.model';

@Component({
  selector: 'app-order-history-table',
  imports: [LucideAngularModule, NgClass, NgIf, DatePipe],
  templateUrl: './order-history-table.component.html',
  styleUrl: './order-history-table.component.scss',
})
export class OrderHistoryTableComponent {
  openMenuIndex: number | null = null;
  @Input() orders: CustomerOrder[] = [];
  @Input() priceCurrency = '';

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    // Check if the click is outside the menu
    const target = event.target as HTMLElement;
    if (!target.closest('.order-history-table-actions')) {
      this.openMenuIndex = null;
    }
  }

  toggleMenu(index: number): void {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }
}
