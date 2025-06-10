import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Subject, takeUntil } from 'rxjs';
import { OrderHistoryTableComponent } from './components/order-history-table/order-history-table.component';
import { SpinningLoaderComponent } from '../../../../components/spinning-loader/spinning-loader.component';
import { CustomerService } from '../../services/customer.service';
import { SearchInputComponent } from '../../../../components/search-input/search-input.component';
import { CustomerOrder } from '../../model/customer.model';

@Component({
  selector: 'app-customer-order-history',
  imports: [
    LucideAngularModule,
    OrderHistoryTableComponent,
    SpinningLoaderComponent,
    SearchInputComponent,
  ],
  templateUrl: './customer-order-history.component.html',
  styleUrls: [
    '../../scss/customer-shared.scss',
    './customer-order-history.component.scss',
  ],
})
export class CustomerOrderHistoryComponent implements OnInit, OnDestroy {
  customerService = inject(CustomerService);
  orderHistory: CustomerOrder[] = [];
  private _subRef$ = new Subject<void>();
  priceCurrency = '';
  isLoading = true;
  hasLoadingError = false;

  ngOnInit(): void {
    this.getOrders();
  }

  ngOnDestroy(): void {
    this._subRef$.next();
    this._subRef$.complete();
  }

  getOrders(): void {
    this.hasLoadingError = false;
    this.orderHistory = [];
    this.customerService
      .getOrderHistory()
      .pipe(takeUntil(this._subRef$))
      .subscribe({
        next: response => {
          this.isLoading = false;
          if (response.data) {
            this.orderHistory = response.data.orders;
            this.priceCurrency = response.data.currency;
          }
        },
        error: error => {
          console.error('Error fetching order history:', error);
          this.isLoading = false;
          this.hasLoadingError = true;
        },
      });
  }
}
