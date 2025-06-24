import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  EmbeddedViewRef,
  Inject,
  Injectable,
} from '@angular/core';
import { ToastNotificationComponent } from '../toast-notification.component';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ToastNotificationService {
  private containerRef: ComponentRef<ToastNotificationComponent> | null = null;

  constructor(
    private _appRef: ApplicationRef,
    private _envInjector: EnvironmentInjector,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  private _createContainer(): void {
    if (this.containerRef) return;

    this.containerRef = createComponent(ToastNotificationComponent, {
      environmentInjector: this._envInjector,
    });

    this._appRef.attachView(this.containerRef.hostView);

    const appRootElement = this._document.querySelector('app-root');
    if (!appRootElement) {
      console.error('App root element not found');
      return;
    }

    const containerElement = (
      this.containerRef.hostView as EmbeddedViewRef<ToastNotificationComponent>
    ).rootNodes[0] as HTMLElement;
    appRootElement.appendChild(containerElement);
  }

  show(
    title = 'Toast Notification',
    message = 'This is a toast message.',
    type: 'success' | 'error' | 'info' | 'warning' = 'info'
  ): void {
    this._createContainer();

    const toastComponent = this.containerRef?.instance;
    if (!toastComponent) {
      console.error('Toast component not initialized');
      return;
    }

    const id = crypto.randomUUID();
    toastComponent.addToastNotification({
      id,
      title,
      message,
      type,
    });

    setTimeout(() => this.dismiss(id), 5000); // Dismiss after 5 seconds
  }

  dismiss(id: string): void {
    const toastComponent = this.containerRef?.instance;
    if (!toastComponent) return;
    toastComponent.removeToastNotification(id);
  }
}
