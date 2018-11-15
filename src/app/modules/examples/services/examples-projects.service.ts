import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseRestService } from 'src/app/shared/services/base-rest.service';
import { IProject } from 'src/app/models/projects.model';
import { Observable } from 'rxjs';
import { ResultModel } from 'src/app/models/result';

@Injectable({
  providedIn: 'root'
})
export class ExamplesProjectstService extends BaseRestService<IProject> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getSites(): Observable<ResultModel<IProject>> {
    return this.getAll('example-projects');
  }

  public removeSite(id: number): Observable<ResultModel<IProject>> {
    return this.remove('example-projects', id);
  }
}
