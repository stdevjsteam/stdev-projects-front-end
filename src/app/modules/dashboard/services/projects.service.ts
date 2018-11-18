import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BaseRestService } from 'src/app/shared/services/base-rest.service';
import { IProject } from 'src/app/models/projects.model';
import { ResultModel } from 'src/app/models/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseRestService<IProject> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getAllProjects(endpoint: string): Observable<ResultModel<IProject>> {
    return this.getAll(endpoint);
  }

  public getProjectsByParam(endpoint: string, params: {[param: string]: string}): Observable<ResultModel<IProject>> {
    return this.getByParams(endpoint, params);
  }

  public removeProject(endpoint: string, id: number): Observable<ResultModel<IProject>> {
    return this.remove(endpoint, id);
  }
}
