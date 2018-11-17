import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() searchChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onSearch($event): void {
    this.searchChange.emit($event);
  }

  onEdit(id: number): void {

  }

  onRemove(id: number): void {

  }

}
