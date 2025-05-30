import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, LucideAngularModule, RouterModule, UserMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMainNavigation = false;
  showSearchProductBar = false;
  isAuthenticated = true;

  toggleMainNavigation(): void {
    this.showMainNavigation = !this.showMainNavigation;
    this.showSearchProductBar = false;
  }

  toggleSearchProductBar(): void {
    this.showSearchProductBar = !this.showSearchProductBar;
    this.showMainNavigation = false;
  }
}
