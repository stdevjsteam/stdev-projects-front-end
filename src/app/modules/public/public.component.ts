import { Component, OnInit } from '@angular/core';

import { IProject } from 'src/app/models/projects.model';
import { ResultModel } from 'src/app/models/result';
import { PublicProjectstService } from './services/public-projects.service';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  public projects: IProject[];

  constructor(
    private publicProjectsService: PublicProjectstService
  ) { }

  ngOnInit() {
    this.publicProjectsService.getSites().subscribe(
      (result: ResultModel<IProject>) => {
        this.projects = result.data;
      }
    );
  }

}
