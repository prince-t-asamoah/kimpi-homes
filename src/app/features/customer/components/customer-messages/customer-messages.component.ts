import { Component, inject, OnInit } from '@angular/core';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesViewerComponent } from './components/messages-viewer/messages-viewer.component';
import { CustomerService } from '../../services/customer.service';
import { CustomerMessage } from '../../model/messages.model';
import { SpinningLoaderComponent } from '../../../../components/spinning-loader/spinning-loader.component';
import { LoadingErrorComponent } from '../../../../components/loading-error/loading-error.component';

@Component({
  selector: 'app-customer-messages',
  imports: [
    MessagesListComponent,
    MessagesViewerComponent,
    SpinningLoaderComponent,
    LoadingErrorComponent,
  ],
  templateUrl: './customer-messages.component.html',
  styleUrls: [
    '../../scss/customer-shared.scss',
    './customer-messages.component.scss',
  ],
})
export class CustomerMessagesComponent implements OnInit {
  private _customerService = inject(CustomerService);
  messages: CustomerMessage[] = [];
  isLoading = true;
  hasLoadingError = false;
  selectedMessage: CustomerMessage | null = null;

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this._customerService.getMessages().subscribe({
      next: response => {
        if (response.data) {
          this.messages = response.data;
        }
        this.isLoading = false;
      },
      error: () => {
        this.hasLoadingError = true;
        this.isLoading = false;
      },
    });
  }

  selectMessage(message: CustomerMessage): void {
    this.selectedMessage = message;
  }

  closeMessageViewer(): void {
    this.selectedMessage = null;
  }
}
