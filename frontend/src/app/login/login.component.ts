import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

    login() {
        if (this.loginForm.invalid) alert("Preencha os campos corretamente.");

        alert("Validando suas credenciais...");
    }
}
