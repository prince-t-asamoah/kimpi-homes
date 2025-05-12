import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-shop-breadcrumb',
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './shop-breadcrumb.component.html',
  styleUrl: './shop-breadcrumb.component.scss',
})
export class ShopBreadcrumbComponent {}
