import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PublicComponent } from './components/public/public.component';
import { ExamplesComponent } from './components/examples/examples.component';

import { AuthGuard } from 'src/app/shared/services/auth.guard';

const dashboardRoutes: Routes = [
  { path: '', component: PublicComponent, canActivate: [ AuthGuard ], children: [
    { path: 'public',  component: PublicComponent },
    { path: 'examples',  component: ExamplesComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardRoutingModule {}
