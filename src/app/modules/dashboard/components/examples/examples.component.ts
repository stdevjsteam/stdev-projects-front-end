import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProject } from 'src/app/models/projects.model';
import { ProjectsService } from '../../services/projects.service';
import { ResultModel } from 'src/app/models/result';
import { IsAdmin } from 'src/app/shared/base/is-admin';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent extends IsAdmin implements OnInit, OnDestroy {

  public projects: IProject[];
  public mode = 'example';
  private projectsSubscribtion$: Subscription;

  constructor(
    private projectsService: ProjectsService,
    protected authService: AuthService
  ) {
    super(authService);
  }

  ngOnInit() {
    this.projectsSubscribtion$ = this.projectsService.getAllProjects('example-projects').subscribe(
      (result: ResultModel<IProject>) => {
        this.projects = result.data;
      }
    );
  }

  ngOnDestroy() {
    this.projectsSubscribtion$.unsubscribe();
  }

}
