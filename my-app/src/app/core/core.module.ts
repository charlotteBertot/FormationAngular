import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionService } from './services/collection/collection.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CollectionService]
})
export class CoreModule { }
