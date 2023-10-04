import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public user:string = "";

    constructor (
        private router: Router
    ) {}

    ngOnInit() {
        const getUser = localStorage.getItem('user');

        if (getUser !== null) {
            this.user = JSON.parse(getUser).name
        }
    }

    signOut() {
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
    }
}
