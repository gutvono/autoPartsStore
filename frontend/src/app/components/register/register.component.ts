import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    public submitError:string = "";
    public submitSuccess:string = "";

    registerForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(
        private registerService: RegisterService,
        private router: Router,
    ) {}

    get username() {
        return this.registerForm.get('username');
    }

    get password() {
        return this.registerForm.get('password');
    }

    register() {
        if (this.registerForm.invalid) {
            alert("Preencha os campos corretamente.");
            return;
        }

        alert("Validando registro...");
        this.registerService
            .registerPost(this.registerForm.value)
            .subscribe({
                next: (data) => {
                    this.submitError = "";
                    this.submitSuccess = data.message;
                    // this.router.navigate(['/market']);
                },
                error: (e) => {
                    this.submitSuccess = "";
                    this.submitError = e.error.message;
                }
            });
    }
}
