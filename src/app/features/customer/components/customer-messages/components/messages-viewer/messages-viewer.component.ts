import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerMessage } from '../../../../model/messages.model';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-messages-viewer',
  imports: [LucideAngularModule],
  templateUrl: './messages-viewer.component.html',
  styleUrl: './messages-viewer.component.scss',
})
export class MessagesViewerComponent {
  @Input() message: CustomerMessage | null = null;
  @Output() closeViewer = new EventEmitter<void>();
}
