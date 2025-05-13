import {
  Component,
  HostListener,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LanguageBarComponent } from '../../components/language-bar/language-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ShopBreadcrumbComponent } from './components/shop-breadcrumb/shop-breadcrumb.component';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-shop',
  imports: [
    RouterModule,
    LucideAngularModule,
    NavbarComponent,
    LanguageBarComponent,
    FooterComponent,
    ShopBreadcrumbComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ShopComponent {
  private _uiService = inject(UiService);
  isFilterSidebarOpen = this._uiService.isFilterSidebarOpen;
  mobilePageWidth = 768; //Mobile Screen Max Width

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowTarget = event.target as Window;
    if (
      windowTarget.innerWidth > 768 &&
      this._uiService.isFilterSidebarOpen()
    ) {
      this._uiService.toggleFilterSidebar();
    }
  }
}
