import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserModel } from 'src/app/models/user.model';
import { ResultModel } from 'src/app/models/result';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [ Validators.required, Validators.email ]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (result: ResultModel<UserModel>) => {
          const data = result.data[0];
          this.authService.user = new UserModel(data.email, data.password, data.isAdmin);
          this.authService.setToken(data.token);
          this.authService.authenticatedSubject.next(true);
          this.router.navigate(['/public']);
        },
        (err: HttpErrorResponse) => {
          if (err.status === 400) {
            // show message
          }
        }
      );
    }
  }

}
