import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitelistComponent } from './components/sitelist/sitelist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SitelistComponent
  ],
  exports: [
    SitelistComponent
  ]
})
export class SharedModule { }
