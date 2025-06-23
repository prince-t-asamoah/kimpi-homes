import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopRoutes } from './shop.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(shopRoutes)],
})
export class ShopModule {}
