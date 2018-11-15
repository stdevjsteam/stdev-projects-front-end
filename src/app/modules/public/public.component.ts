import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProject } from 'src/app/models/projects.model';
import { ResultModel } from 'src/app/models/result';
import { PublicProjectstService } from './services/public-projects.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IsAdmin } from 'src/app/shared/base/is-admin';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent extends IsAdmin implements OnInit, OnDestroy {

  public projects: IProject[];
  public mode = 'public';
  private projectsSubscribtion$: Subscription;

  constructor(
    private publicProjectsService: PublicProjectstService,
    protected authService: AuthService
  ) {
    super(authService);
  }

  ngOnInit() {
    this.projectsSubscribtion$ = this.publicProjectsService.getSites().subscribe(
      (result: ResultModel<IProject>) => {
        this.projects = result.data;
      }
    );
  }

  ngOnDestroy() {
    this.projectsSubscribtion$.unsubscribe();
  }

}
