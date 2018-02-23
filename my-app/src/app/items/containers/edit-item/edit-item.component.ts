import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Router } from '@angular/router';
import { Item } from '../../../shared/interfaces/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  editItem(item: Item) {
    // this.collectionService.update(item);
    this.router.navigate(['items/liste']);
  }

}
