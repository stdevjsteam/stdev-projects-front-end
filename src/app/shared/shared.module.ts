import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitelistComponent } from './components/sitelist/sitelist.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SitelistComponent,
    ProjectsTableComponent
  ],
  exports: [
    SitelistComponent
  ]
})
export class SharedModule { }
