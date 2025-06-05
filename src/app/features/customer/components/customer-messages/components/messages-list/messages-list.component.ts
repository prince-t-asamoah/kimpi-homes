import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchInputComponent } from '../../../../../../components/search-input/search-input.component';
import { CustomerMessage } from '../../../../model/messages.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [SearchInputComponent, NgClass],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss',
})
export class MessagesListComponent {
  @Input() messages: CustomerMessage[] = [];
  @Input() isLoading = false;
  @Input() hasLoadingError = false;
  @Input() selectedMessage: CustomerMessage | null = null;
  @Output() selectMessage = new EventEmitter<CustomerMessage>();
}
