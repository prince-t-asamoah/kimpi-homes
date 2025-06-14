import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { BreadcrumbLink } from '../../model/breadcrumbs.model';

@Component({
  selector: 'app-breadcrumb-navigation',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './breadcrumb-navigation.component.html',
  styleUrl: './breadcrumb-navigation.component.scss',
})
export class BreadcrumbNavigationComponent {
  @Input() breadcrumbs: BreadcrumbLink[] = [];
}
