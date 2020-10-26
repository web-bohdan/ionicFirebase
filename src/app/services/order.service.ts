import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../interfaces/order';
import { SellerOrdersService } from './seller-orders.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderCollection: AngularFirestoreCollection<Order>;
  order: Observable<Order[]>;
  constructor( private db: AngularFirestore, private userService: UserService, private sellerOrder: SellerOrdersService) {
    this.orderCollection = db.collection<Order>(`user/${this.userService.getUser.uid}/orders`);
    this.order = this.orderCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

addOrder(order: Order) {
  this.sellerOrder.addOrder(order);
  return this.orderCollection.add(order);
}

getOrder(id) {
  return this.orderCollection.doc<Order>(id).valueChanges();
}

getOrders() {
  return this.order;
}

}