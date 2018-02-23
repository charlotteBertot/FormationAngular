import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { ItemDirective } from './directives/item/item.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavComponent,
    ItemDirective,
    FormComponent
  ],
  exports: [
    NavComponent,
    ItemDirective
  ]
})
export class SharedModule { }
