import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectsTableComponent } from './components/projects-table/projects-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsTableComponent
  ],
  exports: [
    ProjectsTableComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
