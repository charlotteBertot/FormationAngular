import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  state = State;
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collection = this.collectionService.getCollection();
    this.state = State;
  }

}
