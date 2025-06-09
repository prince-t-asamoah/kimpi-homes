import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import {
  CustomerMenuActionItem,
  CustomerOrder,
} from '../../../../model/customer.model';
import { ActionsMenuComponent } from '../../../actions-menu/actions-menu.component';

@Component({
  selector: 'app-order-history-table',
  imports: [LucideAngularModule, NgClass, NgIf, DatePipe, ActionsMenuComponent],
  templateUrl: './order-history-table.component.html',
  styleUrl: './order-history-table.component.scss',
})
export class OrderHistoryTableComponent {
  @Input() orders: CustomerOrder[] = [];
  @Input() priceCurrency = '';
  @ViewChildren(ActionsMenuComponent)
  actionsMenus!: QueryList<ActionsMenuComponent>;

  orderActionsMenuItems: CustomerMenuActionItem[] = [
    { id: 'view', label: 'View Order', iconName: 'eye' },
    { id: 'reorder', label: 'Reorder', iconName: 'repeat' },
    { id: 'cancel', label: 'Cancel Order', iconName: 'circle-x' },
  ];

  closeAllMenusExceptOpened(openedMenu: ActionsMenuComponent): void {
    this.actionsMenus.forEach(menu => {
      if (menu !== openedMenu) {
        menu.closeMenu();
      }
    });
  }
}
