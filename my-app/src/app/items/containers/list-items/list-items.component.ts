import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  collection$: Observable<Item[]>;
  state;
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collection$ = this.collectionService.getCollection();
    this.state = State;
  }

}
