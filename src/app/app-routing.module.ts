import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'public', loadChildren: './modules/public/public.module#PublicModule'},
  { path: 'examples', loadChildren: './modules/examples/examples.module#ExamplesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
