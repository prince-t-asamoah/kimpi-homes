import { NgClass } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { LanguageBarComponent } from '../language-bar/language-bar.component';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, LucideAngularModule, RouterModule, LanguageBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  showMainNavigation = false;
  showSearchProductBar = false;

  toggleMainNavigation(): void {
    this.showMainNavigation = !this.showMainNavigation;
    this.showSearchProductBar = false;
  }

  toggleSearchProductBar(): void {
    this.showSearchProductBar = !this.showSearchProductBar;
    this.showMainNavigation = false;
  }
}
