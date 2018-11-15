import { Injectable } from '@angular/core';
import { BaseRestService } from './base-rest.service';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { ResultModel } from 'src/app/models/result';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseRestService<UserModel> {

  user: UserModel;

  public authenticatedSubject = new Subject<boolean>();

  constructor(
    protected http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    super(http);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token): void {
    localStorage.setItem('token', token);
  }

  public tokenNotExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  public getUserId(): UserModel {
    if (this.isAuthenticated) {
      return this.jwtHelper.decodeToken(this.getToken());
    }
  }

  public get isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.tokenNotExpired(token) : false;
  }

  public login(user: UserModel): Observable<ResultModel<UserModel>> {
    return this.create('users/login/', user);
  }

  public logout() {
    localStorage.removeItem('token');
  }
}
