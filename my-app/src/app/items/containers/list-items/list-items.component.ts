import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../../core/services/collection';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit(): void {
    this.collection = COLLECTION;
  }

}
