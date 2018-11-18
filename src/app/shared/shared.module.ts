import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ManageTableComponent } from './components/manage-table/manage-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsTableComponent,
    ManageTableComponent
  ],
  exports: [
    ProjectsTableComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
