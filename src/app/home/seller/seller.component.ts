import { Component, OnInit } from '@angular/core';
import { SellerOrdersService } from 'src/app/services/seller-orders.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {

  constructor(public sellerOrdersService: SellerOrdersService) { }

  ngOnInit() {}

}
