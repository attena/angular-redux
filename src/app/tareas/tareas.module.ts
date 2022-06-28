import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ActionsComponent } from './actions/actions.component';
import { ElementosComponent } from './elementos/elementos.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AddComponent,
    ActionsComponent,
    ElementosComponent,
    ListComponent,
    PageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    PageComponent,
  ]
})
export class TareasModule { }
