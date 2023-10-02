import { FormControl, ValidationErrors } from "@angular/forms";

function passwordValidator(control: FormControl): ValidationErrors | null {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    const isValid = hasUpperCase && hasLowerCase && hasNumber && password.length >= 8;
  
    return isValid ? null : { invalidPassword: true }
}

export default passwordValidator;