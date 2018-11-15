import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsTableComponent } from './components/projects-table/projects-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsTableComponent
  ],
  exports: [
    ProjectsTableComponent
  ]
})
export class SharedModule { }
