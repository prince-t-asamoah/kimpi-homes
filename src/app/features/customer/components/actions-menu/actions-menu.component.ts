import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CustomerMenuActionItem } from '../../model/customer.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-actions-menu',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './actions-menu.component.html',
  styleUrl: './actions-menu.component.scss',
})
export class ActionsMenuComponent {
  @Input() menuItems: CustomerMenuActionItem[] = [];
  @Output() itemSelected = new EventEmitter<string>();
  hasOpenMenu = false;

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    // Check if the click is outside the menu
    const target = event.target as HTMLElement;
    if (!target.closest('.actions-menu') && this.hasOpenMenu) {
      this.closeMenu();
    }
  }

  openMenu(): void {
    this.hasOpenMenu = true;
  }

  closeMenu(): void {
    this.hasOpenMenu = false;
  }

  selectMenuItem(itemId: string): void {
    this.closeMenu();
    this.itemSelected.emit(itemId);
  }
}
