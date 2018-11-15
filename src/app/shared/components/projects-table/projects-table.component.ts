import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from 'src/app/models/projects.model';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {

  @Input() mode: string;
  @Input() isAdmin = false;
  @Input() projects: ProjectModel;

  constructor() { }

  ngOnInit() {
  }

}
