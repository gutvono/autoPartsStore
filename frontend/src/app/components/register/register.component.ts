import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';
import passwordValidator from './register.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    public submitError:string = "";
    public submitSuccess:string = "";

    registerForm = new FormGroup({
        name: new FormControl('',
            Validators.required
        ),
        lastname: new FormControl('',
            Validators.required
        ),
        age: new FormControl(Number, 
            Validators.required
        ),
        role: new FormControl('customer'),
        login: new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]),
        password: new FormControl('', [
            Validators.required,
            passwordValidator
        ]),
    });

    constructor(
        private registerService: RegisterService,
        private router: Router,
    ) {}

    get name() {
        return this.registerForm.get('name');
    }

    get lastname() {
        return this.registerForm.get('lastname');
    }

    get age() {
        return this.registerForm.get('age');
    }

    get role() {
        return this.registerForm.get('role');
    }

    get login() {
        return this.registerForm.get('login');
    }

    get password() {
        return this.registerForm.get('password');
    }

    register() {
        if (this.registerForm.invalid) {
            alert("Preencha os campos corretamente.");
            return;
        }

        console.log(this.registerForm.value);

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
