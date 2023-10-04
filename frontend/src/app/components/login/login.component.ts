import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public submitError:string = "";
    public submitSuccess:string = "";

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private loginService: LoginService,
        private router: Router,
        ) {};

    get username() {
        return this.loginForm.get('username')!;
    };

    get password() {
        return this.loginForm.get('password')!;
    };

    login() {
        if (this.loginForm.invalid) {
            alert("Preencha os campos corretamente.")
            return;
        };

        alert("Validando suas credenciais...");
        this.loginService
            .loginPost(this.loginForm.value)
            .subscribe({
                next: ({message, role, name}) => {
                    this.submitError = "";
                    this.submitSuccess = message;
                    localStorage.setItem('user', JSON.stringify({name, role}));
                    this.router.navigate([`/${role}`]);
                },
                error: (e) => {
                    this.submitSuccess = "";
                    this.submitError = e.error.message;
                }
            });
    }
}
