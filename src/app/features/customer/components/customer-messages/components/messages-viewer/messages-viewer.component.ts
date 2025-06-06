import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CustomerMessage } from '../../../../model/messages.model';
import { ActionsMenuComponent } from '../../../actions-menu/actions-menu.component';
import { CustomerMenuActionItem } from '../../../../model/customer.model';

@Component({
  selector: 'app-messages-viewer',
  imports: [LucideAngularModule, ActionsMenuComponent],
  templateUrl: './messages-viewer.component.html',
  styleUrl: './messages-viewer.component.scss',
})
export class MessagesViewerComponent {
  @Input() message: CustomerMessage | null = null;
  @Output() closeViewer = new EventEmitter<void>();
  messageActions: CustomerMenuActionItem[] = [
    {
      id: 'mark-as-read',
      label: 'Mark as Read',
      iconName: 'mail-open',
    },
    {
      id: 'delete-message',
      label: 'Delete Message',
      iconName: 'trash-2',
    },
    {
      id: 'archive-message',
      label: 'Archive Message',
      iconName: 'archive',
    },
  ];
}
