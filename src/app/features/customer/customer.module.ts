import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(customerRoutes)],
})
export class CustomerModule {}
