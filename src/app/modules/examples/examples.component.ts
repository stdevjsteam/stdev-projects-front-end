import { Component, OnInit } from '@angular/core';

import { IProject } from 'src/app/models/projects.model';
import { ExamplesProjectstService } from './services/examples-projects.service';
import { ResultModel } from 'src/app/models/result';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  public projects: IProject[];
  public mode = 'examples';

  constructor(
    private exampleProjectsService: ExamplesProjectstService
  ) { }

  ngOnInit() {
    this.exampleProjectsService.getSites().subscribe(
      (result: ResultModel<IProject>) => {
        this.projects = result.data;
      }
    );
  }

}
