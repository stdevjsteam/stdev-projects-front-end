import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ExamplesRoutingModule } from './examples-routing.module';

import { ExamplesComponent } from './examples.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExamplesRoutingModule
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule { }
