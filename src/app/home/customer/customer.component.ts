import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/interfaces/order';
import { HelperService } from 'src/app/services/helper.service';
import { OrderService } from 'src/app/services/order.service';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  CreateOrderForm: FormGroup;
  orders: Order[];
  constructor(
    private $fb: FormBuilder,
    private orderService: OrderService,
    private userService: UserService,
    private helperService: HelperService
    ) {
    this.CreateOrderForm = this.$fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async SubmitForm() {
    const {title, description} = this.CreateOrderForm.value;
    this.helperService.LoaderActivate('Adding new Order...');
    try {
      const result = await this.orderService.addOrder({title, description, userId: this.userService.getUser.uid, status: 'new'});
      if (result) {
        this.helperService.LoaderStop();
      }
    } catch (e) {
      console.log(e);
    }
  }
}
