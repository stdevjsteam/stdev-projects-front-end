import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProject } from 'src/app/models/projects.model';
import { ResultModel } from 'src/app/models/result';
import { ProjectsService } from '../../services/projects.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IsAdmin } from 'src/app/shared/base/is-admin';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent extends IsAdmin implements OnInit, OnDestroy {

  public projects: IProject[];
  public mode = 'public';
  private projectsSubscribtion$: Subscription;

  @ViewChild('search') search: EventEmitter;

  constructor(
    private projectsService: ProjectsService,
    protected authService: AuthService
  ) {
    super(authService);
  }

  ngOnInit() {
    this.projectsSubscribtion$ = this.projectsService.getAllProjects('public-projects').subscribe(
      (result: ResultModel<IProject>) => {
        this.projects = result.data;
      }
    );
  }

  ngOnDestroy() {
    this.projectsSubscribtion$.unsubscribe();
  }

}
