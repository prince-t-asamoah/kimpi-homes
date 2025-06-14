import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { LanguageBarComponent } from '../../components/language-bar/language-bar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BreadcrumbNavigationComponent } from '../../components/breadcrumb-navigation/breadcrumb-navigation.component';
import { UiService } from '../../services/ui/ui.service';
import { BreadcrumbLink } from '../../model/breadcrumbs.model';
import { CUSTOMER_ROUTES } from './constants/routes.contants';

@Component({
  selector: 'app-customer',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    NavbarComponent,
    FooterComponent,
    LanguageBarComponent,
    BreadcrumbNavigationComponent,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnInit, OnDestroy {
  private _uiService = inject(UiService);
  private _router = inject(Router);
  private _$routerSubRef = new Subject<void>();

  breadcrumbLinks: BreadcrumbLink[] = [
    { label: 'Home', link: '/', isActive: false },
  ];

  ngOnInit(): void {
    this._setBreadcrumbLinks(this._router.url);
    this._router.events
      .pipe(
        takeUntil(this._$routerSubRef),
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(data => {
        this._setBreadcrumbLinks(data.url);
      });
  }

  ngOnDestroy(): void {
    this._$routerSubRef.next();
    this._$routerSubRef.complete();
  }

  toggleLogoutDialog() {
    this._uiService.toggleLogoutDialog();
  }

  private _setBreadcrumbLinks(url: string) {
    const homeBreadcrumbLink = { label: 'Home', link: '/', isActive: false };
    switch (url) {
      case CUSTOMER_ROUTES.overview.route:
        this.breadcrumbLinks = [
          homeBreadcrumbLink,
          { label: CUSTOMER_ROUTES.overview.name, isActive: true },
        ];
        break;
      case CUSTOMER_ROUTES.personalDetails.route:
        this.breadcrumbLinks = [
          homeBreadcrumbLink,
          {
            label: CUSTOMER_ROUTES.personalDetails.name,
            isActive: true,
          },
        ];
        break;
      case CUSTOMER_ROUTES.address.route:
        this.breadcrumbLinks = [
          homeBreadcrumbLink,
          {
            label: CUSTOMER_ROUTES.address.name,
            isActive: true,
          },
        ];
        break;
      case CUSTOMER_ROUTES.orderHistory.route:
        this.breadcrumbLinks = [
          homeBreadcrumbLink,
          {
            label: CUSTOMER_ROUTES.orderHistory.name,
            isActive: true,
          },
        ];
        break;
      case CUSTOMER_ROUTES.messages.route:
        this.breadcrumbLinks = [
          homeBreadcrumbLink,
          {
            label: CUSTOMER_ROUTES.messages.name,
            isActive: true,
          },
        ];
        break;
      case CUSTOMER_ROUTES.accountSettings.route:
        this.breadcrumbLinks = [
          homeBreadcrumbLink,
          {
            label: CUSTOMER_ROUTES.accountSettings.name,
            isActive: true,
          },
        ];
        break;
      default:
        this.breadcrumbLinks = [homeBreadcrumbLink];
    }
  }
}
