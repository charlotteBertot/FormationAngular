import { Injectable } from '@angular/core';
import { COLLECTION } from '../collection';
import { Item } from '../../../shared/interfaces/item.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  private collection$: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }

  getCollection(): Observable<Item[]> {
    return this.collection$;
  }

  setCollection(itemsCollection: Observable<Item[]>): void {
    this.collection$ = itemsCollection;
  }

  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item).catch((error) => {
      console.log(error);
    });
  }

  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item).catch((error) => {
      console.log(error);
    });
  }
}
