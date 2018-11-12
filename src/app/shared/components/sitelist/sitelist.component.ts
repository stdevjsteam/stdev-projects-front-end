import { Component, OnInit, Input } from '@angular/core';


import { IResult } from 'src/app/models/result';
import { SiteModel } from 'src/app/models/site.model';
import { SitelistService } from '../../services/sitelist.service';

@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.scss']
})
export class SitelistComponent implements OnInit {

  public sites: SiteModel[] = [];

  @Input() forAdmin = false;

  constructor(private siteListService: SitelistService) { }

  ngOnInit() {
    this.siteListService.getSites().subscribe(
      (result: IResult) => {
        this.sites = result.data;
      }
    );
  }

  onRemove(id: number): void {
    this.siteListService.removeSite(id).subscribe(
      (result: IResult) => {
        console.log(result);
      }
    );
  }

}
