import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { element } from 'protractor';
import {ElementshomeComponent } from './elementshome/elementshome.component'

const routes: Routes = [
  { path: 'Elements', component: ElementshomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
