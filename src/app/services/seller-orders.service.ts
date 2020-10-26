import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class SellerOrdersService {

  orderCollection: AngularFirestoreCollection<Order>;
  order: Observable<Order[]>;
  constructor( private db: AngularFirestore, ) {
    this.orderCollection = db.collection<Order>(`orders`);
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
  return this.orderCollection.add(order);
}

getOrder(id) {
  return this.orderCollection.doc<Order>(id).valueChanges();
}

getOrders() {
  return this.order;
}

}