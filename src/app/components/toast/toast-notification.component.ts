import { NgClass } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ToastNotification } from './model/toast-notification.model';

@Component({
  selector: 'app-toast-notification',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.scss',
  animations: [
    trigger('toastAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class ToastNotificationComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';
  @Input() showCloseButton = true;
  @Input() title = '';
  toasts: ToastNotification[] = [];

  getIcon(type: string): string {
    switch (type) {
      case 'success':
        return 'check';
      case 'error':
        return 'circle-x';
      case 'info':
        return 'info';
      case 'warning':
        return 'triangle-alert';
      default:
        return '';
    }
  }

  addToastNotification(toast: ToastNotification): void {
    this.toasts.push(toast);
  }

  removeToastNotification(id: string): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }
}
