import { Injectable } from '@angular/core';
import { COLLECTION } from '../collection';
import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {
  private collection: Item[];
  constructor() {
    this.setCollection(COLLECTION);
  }

  getCollection(): Item[] {
    return this.collection;
  }

  setCollection(itemsCollection): void {
    this.collection = itemsCollection;
  }
}