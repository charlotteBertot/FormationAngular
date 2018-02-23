import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state;
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.state = State;
  }

  private changeState(state: State): void {
    this.item.state = state;
    this.collectionService.update(this.item);
  }

  private edit(): void {
    this.router.navigate(['items/edit']);
  }
}
