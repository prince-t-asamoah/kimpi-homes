import { Component, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-breadcrumb',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './shop-breadcrumb.component.html',
  styleUrl: './shop-breadcrumb.component.scss',
})
export class ShopBreadcrumbComponent implements OnDestroy {
  private _router = inject(Router);
  private _routerSubscription!: Subscription;
  currentRoute = '';

  constructor() {
    this._routerSubscription = this._router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(event => {
        const lastRoute = event.url.split('/').pop();
        this.currentRoute = lastRoute ? lastRoute : '';
      });
  }

  ngOnDestroy(): void {
    if (this._routerSubscription) {
      this._routerSubscription.unsubscribe();
    }
  }
}
