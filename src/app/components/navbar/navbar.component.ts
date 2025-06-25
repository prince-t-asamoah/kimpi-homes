import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ProductSearchSuggestionsComponent } from '../product-search-suggestions/product-search-suggestions.component';
import { ProductSearchResultsDropdownComponent } from '../product-search-results-dropdown/product-search-results-dropdown.component';
import { ProductListingsService } from '../../features/shop/services/product-listings/product-listings.service';
import { SearchItem } from '../../model/search.model';
import { selectIsAuthenticated } from '../../features/auth/auth.store.reducers';
import { AppStore } from '../../model/store.model';

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
    AsyncPipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly _productListingsService = inject(ProductListingsService);
  private _searchProductEvent = new Subject<string>();
  private _searchProductEventSubscription = new Subject<void>();

  showMainNavigation = false;
  showSearchProductBar = false;
  showSearchResultsList = false;
  isAuthenticated$!: Observable<boolean>;
  cartCount = 0;
  searchResults: SearchItem[] = [];
  private readonly _subscriptions: Subscription = new Subscription();

  constructor(private readonly _store: Store<AppStore>) {
    this.isAuthenticated$ = this._store.select(selectIsAuthenticated);
  }

  ngOnInit(): void {
    const searchProductEventSub = this._searchProductEvent
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => {
        this._getProductSearchByTerm();
      });

    this._subscriptions.add(searchProductEventSub);
  }

  ngOnDestroy(): void {
    this._searchProductEventSubscription.next();
    this._searchProductEventSubscription.complete();
  }

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
      this._searchProductEvent.next(inputElement.value);
    } else {
      this.showSearchResultsList = false;
      this.searchResults = [];
    }
  }

  searchInputFocused(): void {
    this.showSearchProductBar = true;
  }

  searchInputBlurred(): void {
    this.showSearchProductBar = false;
  }

  private _getProductSearchByTerm() {
    return this._productListingsService.searchProductsByQuery().subscribe({
      next: response => {
        this.searchResults = response.data.suggestions;
      },
      error: error => {
        console.error('Error fetching search results:', error);
      },
    });
  }
}
