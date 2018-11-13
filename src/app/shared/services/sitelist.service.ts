import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseRestService } from './base-rest.service';

@Injectable({
  providedIn: 'root'
})
export class SitelistService extends BaseRestService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public getSites() {
    return this.getAll('projects');
  }

  public removeSite(id: number) {
    return this.http.delete(`https://stdev-projects.herokuapp.com/api/projects/${id}`);
  }
}
