import { NgClass } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, LucideAngularModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  showMainNavigation = false;
  showSearchProductBar = false;
  isAuthenticated = false;

  toggleMainNavigation(): void {
    this.showMainNavigation = !this.showMainNavigation;
    this.showSearchProductBar = false;
  }

  toggleSearchProductBar(): void {
    this.showSearchProductBar = !this.showSearchProductBar;
    this.showMainNavigation = false;
  }
}
