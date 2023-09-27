import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private loginService: LoginService,
        private router: Router
        ) {}

    get username() {
        return this.loginForm.get('username')!;
    }

    get password() {
        return this.loginForm.get('password')!;
    }

    login() {
        if (this.loginForm.invalid) {
            alert("Preencha os campos corretamente.")
            return;
        };

        console.log(this.loginForm.value);

        alert("Validando suas credenciais...");
        this.loginService
            .loginPost(this.loginForm.value)
            .subscribe({
                complete() {console.info('complete')},
                error(e) {console.log(e)}
            })

        // this.router.navigate(['/market']);
    }
}
