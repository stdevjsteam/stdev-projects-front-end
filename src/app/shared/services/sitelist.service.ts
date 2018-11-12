import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SitelistService {

  constructor(private http: HttpClient) { }

  public getSites() {
    return this.http.get('https://stdev-projects.herokuapp.com/api/projects');
  }

  public removeSite(id: number) {
    return this.http.delete(`https://stdev-projects.herokuapp.com/api/projects/${id}`);
  }
}
