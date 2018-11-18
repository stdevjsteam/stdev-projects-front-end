import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectModel, IProject } from 'src/app/models/projects.model';
import { ProjectsService } from 'src/app/modules/dashboard/services/projects.service';
import { ResultModel } from 'src/app/models/result';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss']
})
export class ProjectsTableComponent implements OnInit {

  @Input() mode: string;
  @Input() isAdmin = false;
  @Input() projects: ProjectModel[];

  private api: string;

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.api = this.mode + '-projects';
  }

  onSearch($event): void {
    this.projectsService.getProjectsByParam(this.api, { technology: $event.target.value.toLowerCase() }).subscribe(
      (result: ResultModel<IProject>) => {
        this.projects = result.data;
      }
    );
  }

  onEdit(id: number): void {

  }

  onRemove(id: number): void {
    this.projectsService.removeProject(this.api, id).subscribe(
      (result: ResultModel<IProject>) => {
        if (result.status) {
          document.getElementById(id.toString()).remove();
        }
      }
    );
  }

}
