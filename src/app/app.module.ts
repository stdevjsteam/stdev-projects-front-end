import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './modules/public/public.module';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './modules/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
