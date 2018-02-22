import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  state;
  constructor() { }

  ngOnInit() {
    this.state = State;
  }

  private changeState(state: State): void {
    this.item.state = state;
  }

}
