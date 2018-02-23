import { AddItemComponent } from './containers/add-item/add-item.component';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './containers/edit-item/edit-item.component';

const appRoutes: Routes = [
  { path: 'liste', component: ListItemsComponent },
  { path: 'new', component: AddItemComponent },
  { path: 'edit', component: EditItemComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
})
export class ItemRoutingModule { }
