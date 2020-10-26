import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    ItemComponent,
    SellerComponent,
    CustomerComponent
  ]
})
export class HomePageModule {}
