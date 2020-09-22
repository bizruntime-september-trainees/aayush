import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionshomeComponent } from './collectionshome/collectionshome.component';


@NgModule({
  declarations: [CollectionshomeComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: []
})
export class CollectionsModule { }
