import { Component } from '@angular/core';
import {CredencialDto} from "../../api/models/credencial-dto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
import {User} from "../security/User";
import {SecurityService} from "../security/security.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  formGroup!: FormGroup;
  public submitted!: boolean;

  constructor(
    private securityService: SecurityService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: [null, Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      this.authenticationService.login(this.formGroup.value).subscribe((data: CredencialDto) => {
        const user: User = {
          id: data.id|| 0,
          name: data.name || '',
          login: data.login || '',
          expiresIn: data.expiresIn || 3600,
          accessToken: data.accessToken || '',
          refreshToken: data.refreshToken || '',
          roles: data.roles
        };

        this.securityService.init(user);
        this.router.navigate(['/']);
      });
    }
  }


  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };
}
