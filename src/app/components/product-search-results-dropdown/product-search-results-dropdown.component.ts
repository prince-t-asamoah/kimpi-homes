import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { SearchSuggestion } from '../../model/search.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-search-results-dropdown',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './product-search-results-dropdown.component.html',
  styleUrl: './product-search-results-dropdown.component.scss',
})
export class ProductSearchResultsDropdownComponent {
  @Input() results: SearchSuggestion[] = [];
}
