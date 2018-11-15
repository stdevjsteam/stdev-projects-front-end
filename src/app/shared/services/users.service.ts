import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseRestService } from './base-rest.service';
import { UserModel } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { ResultModel } from 'src/app/models/result';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseRestService<UserModel> {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }
}
