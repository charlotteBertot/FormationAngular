import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ItemRoutingModule } from './item-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddItemComponent, EditItemComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
