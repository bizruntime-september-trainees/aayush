import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementshomeComponent } from './elementshome/elementshome.component';


@NgModule({
  //list of components,pipes,directives that are created inside the module
  //automatically generated
  declarations: [ElementshomeComponent],
  //list of other module that this module depend upon
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  //lists of components, pipes, directives that are made avaiable to other modules.
  //exports:[ElementshomeComponent]
  exports:[]
})
export class ElementsModule { }
