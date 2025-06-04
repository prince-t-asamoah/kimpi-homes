import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomerService } from '../../services/customer.service';
import { CustomerOrder } from './../../model/customer.model';

@Component({
  selector: 'app-customer-overview',
  imports: [RouterLink, LucideAngularModule, DatePipe],
  templateUrl: './customer-overview.component.html',
  styleUrl: './customer-overview.component.scss',
})
export class CustomerOverviewComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  totalOrders = 0;
  totalShipment = 0;
  totalReturns = 0;
  recentOrders: CustomerOrder[] = [];

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this.getOverviewData();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  getOverviewData(): void {
    this._customerService
      .getOverviewData()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: response => {
          if (response.data) {
            this.totalOrders = response.data.statistics.totalOrders;
            this.totalShipment = response.data.statistics.totalShipment;
            this.totalReturns = response.data.statistics.totalReturns;
            this.recentOrders = response.data.recentOrders;
          }
        },
        error: error => {
          console.error('Error fetching overview data:', error);
        },
      });
  }
}
