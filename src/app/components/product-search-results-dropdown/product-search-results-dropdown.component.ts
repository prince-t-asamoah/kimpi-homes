import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SearchItem } from '../../model/search.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-search-results-dropdown',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './product-search-results-dropdown.component.html',
  styleUrl: './product-search-results-dropdown.component.scss',
})
export class ProductSearchResultsDropdownComponent {
  @Input() results: SearchItem[] = [];
  private _domSanitizer = inject(DomSanitizer);

  getSanitizedHighlightedText(text = ''): string {
    return this._domSanitizer.sanitize(1, text) || '';
  }
}
