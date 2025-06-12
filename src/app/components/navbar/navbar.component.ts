import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ProductSearchSuggestionsComponent } from '../product-search-suggestions/product-search-suggestions.component';
import { ProductSearchResultsDropdownComponent } from '../product-search-results-dropdown/product-search-results-dropdown.component';

@Component({
  selector: 'app-navbar',
  imports: [
    LucideAngularModule,
    RouterModule,
    UserMenuComponent,
    SearchInputComponent,
    ProductSearchSuggestionsComponent,
    ProductSearchResultsDropdownComponent,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMainNavigation = false;
  showSearchProductBar = false;
  showSearchResultsList = false;
  isAuthenticated = true;
  cartCount = 0;

  toggleMainNavigation(): void {
    this.showMainNavigation = !this.showMainNavigation;
  }

  toggleSearchProductBar(): void {
    this.showSearchProductBar = !this.showSearchProductBar;
    this.showMainNavigation = false;
  }

  toggleSearchResults(): void {
    this.showSearchResultsList = !this.showSearchResultsList;
  }

  searchInputChanged(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0) {
      this.showSearchResultsList = true;
    } else {
      this.showSearchResultsList = false;
    }
  }

  searchInputFocused(): void {
    this.showSearchProductBar = true;
  }

  searchInputBlurred(): void {
    this.showSearchProductBar = false;
  }
}
