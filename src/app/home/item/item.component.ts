import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() item: Order;

  constructor() { }

  ngOnInit() {}

}
