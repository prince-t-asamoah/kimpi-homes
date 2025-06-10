import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-user-menu',
  imports: [LucideAngularModule, NgClass, RouterLink, LucideAngularModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  private _uiService = inject(UiService);
  showUserMenu = false;
  @ViewChild('userMenuContainer') userMenu!: ElementRef;

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (!this.userMenu?.nativeElement.contains(event.target)) {
      this.showUserMenu = false;
    }
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  toggleLogoutDialog(): void {
    this.toggleUserMenu();
    this._uiService.toggleLogoutDialog();
  }
}
